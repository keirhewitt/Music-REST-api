import {validate} from "deep-email-validator";
import bcrypt from "bcrypt";


/* Returns a json response */
export const isValidEmail = async (email) => {
    const result = await validate(email);
    return result;
}

export const validatePasswordHash = (truePass, currentHashedPass) => {
    bcrypt
        .compare(truePass, currentHashedPass)
        .then((result) => {
            return result;
        })
        .catch(err => console.log(err.message))

    return false;
}
