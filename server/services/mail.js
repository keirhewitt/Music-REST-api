import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "../.env"});

var emailRegex = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

export const isEmailValid = (email) => {
    if (!email)
        return false;

    if(email.length>254)
        return false;

    var valid = emailRegex.test(email);
    if(!valid)
        return false;

    // Further checking of some things regex can't handle
    var parts = email.split("@");
    if(parts[0].length>64)
        return false;

    var domainParts = parts[1].split(".");
    if(domainParts.some(function(part) { return part.length>63; }))
        return false;

    return true;
}

const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS
    }
});

/* Send API Key to user */
export const sendAPIKey = (key, receiver) => {
    let config = {
        from: process.env.SENDER_EMAIL,
        to: receiver,
        subject: 'Swordfishtrombones - API key',
        html: `<h1>Keep this hidden</h1><br><p>${key}</p>`
    }

    transporter.sendMail(config, function(error, info) {
        if (error) { 
            console.log({ 
                type: "Nodemailer error.",
                error: error
            });
            return false;
        } 
        console.log("Email send success.");
    });

    return true;
}
