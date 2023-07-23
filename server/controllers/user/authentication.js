import bcrypt from "bcrypt";

export const validatePasswordHash = (truePass, currentHashedPass) => {
    bcrypt
        .compare(truePass, currentHashedPass)
        .then((result) => {
            return result;
        })
        .catch(err => console.log(err.message))

    return false;
}
