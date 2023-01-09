import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

/* Route imports */
import lp_routes from "./routes/lpRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

/* Set up middleware */
app.use(express.json());
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true  }))

/* Routes for adding LPs */
app.use('/api/v1/music/lp', lp_routes);

/* Connect to DB and start server */
mongoose.connect(process.env.MONGO_URI)
.then(() => {
    app.listen(PORT, () => {
        console.log(`Listening on ${PORT}..`)
    });
})
.catch((err) => console.log({ message: err.message}))


