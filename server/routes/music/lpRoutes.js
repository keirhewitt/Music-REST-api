import express from "express";
import {
    createLP,
    getAllLPs,
    getLP,
    likeLP,
    updateLP,
    deleteLP
} from "../../controllers/music/lp.js";
import { isAuthenticated } from "../../middleware/authentication.js";

const router = express.Router();

/** CREATE route */
router.post("/create", isAuthenticated, createLP) // Create an LP resource

/** READ route */
router.get("/:artist/:title", isAuthenticated, getLP); // Get single LP
router.get("/", isAuthenticated, getAllLPs); // Return each LP in db

/** UPDATE route */
router.patch("/update/:artist/:title", isAuthenticated, likeLP); // Like an LP
router.patch("/update/:id", isAuthenticated, updateLP); // Update LP details

/** DELETE route */
router.delete("/delete/:id", isAuthenticated, deleteLP); // Delete an LP

export default router;