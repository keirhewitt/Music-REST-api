import express from "express";
import { Login, Logout, Register } from "../../controllers/user/user.js";
import { isAuthenticated } from "../../middleware/authentication.js";

const router = express.Router();

/* User Login (Authentication required) */
router.post('/login/:userId', isAuthenticated, Login);

/* User Logout (Authentication required) */
router.post('/logout', isAuthenticated, Logout);

/* User Register */
router.post('/register', Register);

/* Change password (Authentication required) */
// router.patch('/user/update/:userId', isAuthenticated);


export default router;