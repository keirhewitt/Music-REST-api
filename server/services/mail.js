import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: "../.env"});

const transporter = nodemailer.createTransport({
    service: 'Hotmail',
    port: 465,
    secure: true,
    auth: {
        user: process.env.SENDER_EMAIL,
        pass: process.env.SENDER_PASS
    }
});

/* Send API Key to user */
export const sendAPIKey = (key, receiver) => {
    let config = {
        from: process.env.GMAIL_USER,
        to: receiver,
        subject: 'Swordfishtrombones - API key',
        html: `<h1>Keep this hidden</h1><br><p>${key}</p>`
    }

    transporter.sendMail(config, function(error, info) {
        if (error) { console.log({ error: error}) }
        else { console.log ({ success: `Email sent to ${config.to}`})}
    });
}
