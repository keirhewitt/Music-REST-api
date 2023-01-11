import {validate} from "deep-email-validator";

/* Returns a json response */
export const isValidEmail = async (email) => {
    const result = await validate(email);
    return result;
}
