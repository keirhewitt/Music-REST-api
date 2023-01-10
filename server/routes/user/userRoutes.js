import express from "express";
import { createUser } from "../../controllers/user/users.js";

const router = express.Router();

/* Create user does NOT require authentication (for obvious reasons) */
router.post('/create', createUser);

export default router;
