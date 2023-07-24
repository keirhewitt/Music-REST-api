import User from "../../models/user/User.js";
import { validatePasswordHash } from "./authentication.js";
import { generateApiKey } from "generate-api-key";
import { isEmailValid } from "../../services/mail.js";
import { sendAPIKey } from "../../services/mail.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

/* USER LOGIN */
export const Login = async (req, res) => {
    try {
        // Get user input
        const { email, password } = req.body;
    
        // Validate user input
        if (!(email && password)) {
            res.status(400).send("All input is required");
        }
        // Validate if user exist in our database
        const user = await User.findOne({ email });
    
        if (user && (await bcrypt.compare(password, user.password))) {
            // Create token
            const token = jwt.sign(
            { user_id: user._id, email },
            process.env.TOKEN_KEY,
            { expiresIn: "2h", });
    
            // save user token
            user.token = token;
    
            // user
            return res.status(200).json(user);
        }
        return res.status(400).send("Invalid Credentials");
        } catch (err) {
            return res.status(400).json({
                message: "There was an issue logging in.",
                error: err
            });
        }
}

/* USER LOGOUT */
/* TODO: Implement this, not sure how yet */
export const Logout = async (req, res) => {
    return res.status(200).json({
        message: "Not implemented. Mock success."
    });
}

/* USER REGISTER */
export const Register = async (req, res) => {

    try {
        const { email, password } = req.body;

        if (!(email && password)) {
            return res.status(400).send({
                message: "You must enter an email and password."
            });
        }

        if (!isEmailValid(email)) {
            return res.status(400).send({
                message: "Invalid email address"
            });
        }

        const existingUser = await User.findOne({ email: email });
        if (existingUser) {
            return res.status(400).json({
                error: "Account with that email address already exists."
            })
        }
            
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt);
      
        const newuser = new User({
            email,
            password: hashedPass,
            apikey: generateApiKey({ length: 16 })
        });

        /** Use jsonwebtokens to create a token based on TOKEN_KEY in .env */
        const token = jwt.sign({ 
            user_id: newuser._id, 
            email },
            process.env.TOKEN_KEY,
            {
              expiresIn: "2h",
            }
        );

        newuser.token = token;

        /* Send user API key via email */
        /* If successful, save user and return User object as response */
        if (sendAPIKey(newuser.apikey, newuser.email)) {
            await newuser.save();
            return res.status(200).json(newuser);
        }
        return res.status(502).json({ error: "Could not contact your mailbox to send your API Key." });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}