import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

/* Route imports */
import lp_routes from "./routes/music/lpRoutes.js";
import user_routes from "./routes/user/userRoutes.js";

dotenv.config({ path: "../.env"});

const app = express();
const PORT = process.env.PORT || 8000;

/* Set up middleware */
app.use(express.json());
app.use(cors({ 
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
    origin: "http://localhost:3000"
}));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* Routes for LP data requests */
app.use('/swordfishtrombone/api/v1/music/lp', lp_routes);

/* Routes for user data requests */
app.use('/swordfishtrombone/api/v1/user', user_routes);

/* Connect to DB and start server */
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}..`)
    });
})
.catch((err) => console.log({ message: err.message}))


