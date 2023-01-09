import mongoose from "mongoose";

const schema = mongoose.Schema;

// If empty, return true (can be empty)
// Return: param in format dd-mm-yyyy or dd/mm/yyyy
function validateDate(v) {
    if (v.length < 1) {
        return true;
    }   
    return v.match(/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/);
}

// Return: v is longer than 1 char
function validateString(v) {
    return v.length > 1;
}

// Schema setup 
// Different types of musics
// LP, EP, Song, Single
const LPSchema = new schema({
    artist: {
        type: String, 
        required: true,
        validate: [validateString, 'Artist value too short!']
    },
    title:  {
        type: String, 
        required: true,
        validate: [validateString, 'Title value too short!']
    },
    releaseDate: { 
        type: String, 
        validate: [validateDate, 'Date not in correct format.'] 
    },
    downloadDate: { 
        type: Date, 
        default: Date.now 
    },
    downloads: Number,
    likes: {
        type: Map,
        of: Boolean
    }
}, { timestamps: true });

const LP = new mongoose.model("LP", LPSchema);
export default LP;
