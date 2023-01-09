import express from "express";
import {
    createLP,
    getAllLPs,
    getLP,
    likeLP
} from "../../controllers/music/lp.js";
import { isAuthenticated } from "../../controllers/music/auth.js";

const router = express.Router();

/* CREATE route */
router.post("/add", isAuthenticated, createLP) // Create an LP resource

/* READ route */
router.get("/:artist/:title", isAuthenticated, getLP); // Get single LP
router.get("/", isAuthenticated, getAllLPs); // Return each LP in db

/* UPDATE route */
router.patch("/:artist/:title/update", isAuthenticated, likeLP); // Like an LP

export default router;