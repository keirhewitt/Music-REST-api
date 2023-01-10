
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateApiKey from "generate-api-key";
import User from "../../models/user/User.js";
import { sendAPIKey } from "../../services/mail.js";

/* CREATE User */
export const createUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt);

        const newuser = new User({
            email,
            password: hashedPass,
            apikey: generateApiKey.generateApiKey({ length: 16 })
        });

        const addUser = await newuser.save();

        /* Send user API key */
        sendAPIKey(newuser.apikey, newuser.email);

        res.status(201).json({ msg: "Your API Key is being sent to your email." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}