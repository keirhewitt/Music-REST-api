import express from "express";
import { createUser, readUser, updateUser, deleteUser } from "../../controllers/admin/admin.js";
import { isAuthenticated } from "../../middleware/authentication.js";

const router = express.Router();

/* Create user (Authentication required) */
router.post('/user/create', isAuthenticated, createUser);

/* Delete a User (Authentication required) */
router.delete('/user/delete/:userId', isAuthenticated, deleteUser);

/* Update a User (Authentication required) */
router.patch('/user/update/:userId', isAuthenticated, updateUser);

/* Get a User (Authentication required) */
router.get('/user/:userId', isAuthenticated, readUser);

export default router;
