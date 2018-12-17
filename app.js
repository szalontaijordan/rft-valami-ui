const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const gmailPass = require('./conf').gmailPass;

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rft.valami.2018@gmail.com',
        pass: gmailPass
    }
});

app.post('/api/feedback', (req, res) => {
    const { fromEmail, to, subject, html } = req.body;

    const mailOptions = {
        from: fromEmail,
        to: to,
        subject: subject,
        html: html
    };
    
    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(info);
        }
    });
});

app.use(express.static(path.join(__dirname, 'dist')));
app.use('/*', (req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(port, () => console.log(`Example app listening on port ${port}! ${path.join(__dirname, 'dist', 'index.html')}`));
