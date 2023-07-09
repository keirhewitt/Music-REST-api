import User from "../../models/user/User.js";
import { validatePasswordHash } from "./authentication.js";
import { generateApiKey } from "generate-api-key";
import { isValidEmail } from "./authentication.js";
import bcrypt from "bcrypt";

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

    try {
        const { email, password } = req.body;
        const {valid, reason, validators} = await isValidEmail(email);  // Validate email address

        if (!valid) {
            return res.status(400).json({
                message: "Email address invalid.",
                reason: validators[reason].reason
            });
        }
        
        if (User.findOne({ email: email})) return res.status(303).json({ error: "Email already registered in database." });

        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt);

        const newuser = new User({
            email,
            password: hashedPass,
            apikey: generateApiKey.generateApiKey({ length: 16 })
        });

        await newuser.save();

        /* Send user API key via email */
        sendAPIKey(newuser.apikey, newuser.email);
        res.status(201).json({ msg: "Your API Key is being sent to your email." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}