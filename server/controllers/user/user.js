import User from "../../models/user/User.js";
import { validatePasswordHash } from "./authentication.js";
// import { Jwt } from "jsonwebtoken";

/* USER LOGIN */
export const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        
        const user = await User.findOne({ email: email });  // Find User by Email Address
        if (!user) return res.status(404).json({ error: "Invalid login credentials." });

        const authPassword = await bcrypt.compare(password, user.password); // Authorise password provided in payload
        if (!authPassword) return res.status(404).json({ error: "Invalid credentials." });

        return res.status(200).json({
            token: 'testtoken1222212'
        });
    } catch (err) {
        return res.status(400).json({
            error: err.message,
            message: 'Invalid request'
        })
    }
}

/* USER LOGOUT */
export const Logout = async (req, res) => {
    return res.status(200).json({
        message: "Not implemented. Mock success."
    });
}

/* USER REGISTER */
export const Register = async (req, res) => {
    return res.status(200).json({
        message: "Not implemented. Mock success."
    });
}