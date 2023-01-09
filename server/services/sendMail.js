import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'user',   // TODO: replace this
        password: 'password'    // TODO: replace this
    }
});

/* Send API Key to user */
const sendAPIKey = (key, address) => {
    let config = {
        from: process.env.GMAIL_USER,
        to: address,
        subject: 'Your Swordfishtrombones API key',
        html: `<h1>Keep this hidden</h1><br><p>${key}</p>`
    }

    transporter.sendMail(config, function(error, info) {
        if (error) { console.log({ error: error}) }
        else { console.log ({ success: `Email sent to ${config.to}`})}
    });
}
