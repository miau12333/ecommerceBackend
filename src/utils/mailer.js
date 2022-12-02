const nodemailer = require('nodemailer');
require("dotenv").config();

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465, //forma segura
    secure: true,
    auth: {
        user: 'juta2303@gmail.com',
        pass:  process.env.G_PASSWORD,
    }
});

module.exports = transporter;
