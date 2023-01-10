import User from "../models/user/User.js";

export const isAuthenticated = async (req, res, next) => {
    try {
        const { apiKey } = req.body;
        const user = await User.findOne({
            apikey: apiKey
        })
        if (!apiKey) return res.status(403).json({ message: "Invalid api key."})
        else {
            if (!user) return res.status(400).json({ message: "Invalid api key." });
            else {
                next();
            }
        }
    } catch (err) {
        res.status(403).json({ message: err.message });
    }
}