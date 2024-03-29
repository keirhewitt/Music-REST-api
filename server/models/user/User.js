import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
    {
        email: {
            type: String,
            required: true,
            unique: true,
            max: 50
        },
        password: {
            type: String,
            required: true,
            min: 5,
            max: 50,
        },
        apikey: {
            type: String,
            unique: true,
            min: 16,
            max: 16
        },
        token: {
            type: String
        },
    }, 
    { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;