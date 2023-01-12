
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import generateApiKey from "generate-api-key";
import User from "../../models/user/User.js";
import { sendAPIKey } from "../../services/mail.js";
import { isValidEmail } from "./authentication.js";

/* CREATE User */
export const createUser = async (req, res) => {
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

        /* Send user API key */
        sendAPIKey(newuser.apikey, newuser.email);
        res.status(201).json({ msg: "Your API Key is being sent to your email." });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

/* READ User */
export const readUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = User.findById(id);
        if (!user) return res.status(404).json({ error: "Cannot find user with id." })
        res.status(200).json(user); // Return User object
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

/* UPDATE User */
export const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { email, password } = req.body;

        const updatedDetails = { email: email }; // Property that will be updated

        const user = await User.findById({ _id: id });  // Find User by ID
        if (!user) return res.status(404).json({ error: "User does not exist." });

        const authPassword = await bcrypt.compare(password, user.password); // Authorise password provided in payload
        if (!authPassword) return res.status(404).json({ error: "Invalid credentials." });

        const duplicate = await User.find({ email: newemail });  // Make sure new email is not already used by someone else
        if (duplicate) return res.status(400).json({ error: "This email is already in use." });
        
        await User.updateOne({_id: id}, updatedDetails);   // Update User (filter) with new details
        await user.save();

        res.status(200).json({ message: "User details updated." });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}

/* DELETE User */
export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params;
        const user = User.findById(userId);
        if (!user) return res.status(404).json({ error: "Cannot find user with id." })
        await User.findOneAndRemove({ _id: userId });
        res.status(200).json({ message: "User deleted." });
    } catch (err) {
        res.status(404).json({ error: "Invalid request." });
    }
}