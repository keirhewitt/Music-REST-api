import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import { connect } from "./config/database.js";

/* Route imports */
import lp_routes from "./routes/music/lpRoutes.js";
import admin_routes from "./routes/admin/adminRoutes.js";
import user_routes from "./routes/user/userRoutes.js";

/** Connect to the Database */
connect();

const app = express();
const PORT = process.env.PORT || 8000;

/* Set up middleware */
app.use(express.json());
app.use(cors({ 
    methods: ["GET", "POST", "PATCH", "DELETE"],
    credentials: true,
    origin: "http://localhost:5173"
}));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

/* Routes for LP data requests */
app.use('/swordfishtrombone/api/v1/music/lp', lp_routes);

/* Routes for User data requests */
app.use('/swordfishtrombone/api/v1/user', user_routes);

/* Routes for Administrator role functions */
app.use('/swordfishtrombone/api/v1/admin', admin_routes);

app.listen(PORT, () => {
    console.info(`Listening @ ${PORT}`)
});

