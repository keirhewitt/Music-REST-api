import express from "express";
import {
    createLP,
    getAllLPs,
    getLP,
    likeLP
} from "../controllers/lp.js";

const router = express.Router();

/* CREATE route */
router.post("/add", createLP) // Create an LP resource

/* READ route */
router.get("/:artist/:title", getLP); // Get single LP
router.get("/", getAllLPs); // Return each LP in db

/* UPDATE route */
router.patch("/:artist/:title/update", likeLP); // Like an LP

export default router;