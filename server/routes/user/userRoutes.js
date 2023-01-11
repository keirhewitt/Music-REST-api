import express from "express";
import { createUser, readUser, updateUser, deleteUser } from "../../controllers/user/users.js";
import { isAuthenticated } from "../../middleware/authentication.js";

const router = express.Router();

/* Create user (Authentication required) */
router.post('/create', isAuthenticated, createUser);

/* Delete a User (Authentication required) */
router.delete('/delete/:userId', isAuthenticated, deleteUser);

/* Update a User (Authentication required) */
router.patch('/update/:userId', isAuthenticated, updateUser);

/* Get a User (Authentication required) */
router.get('/:userId', isAuthenticated, readUser);

export default router;
