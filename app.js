const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const gmailPass = require('./conf').gmailPass;
const requestPromise = require('request-promise');

const app = express();
const port = process.env.PORT || 3000;

const LOGIN_API = 'http://213.181.208.165:8080/login/';

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rft.valami.2018@gmail.com',
        pass: gmailPass
    }
});

app.use('/api/login/*', (req, res) => {
    const uri = LOGIN_API + req.originalUrl.split('login/')[1];
    const method = req.method;
    const body = req.body;

    const headersToCopy = ['content-type', 'cache-control', 'accept', 'host', 'authorization'];
    let headers = { 'user-agent': 'rft-valami-node' }

    for (let header in req.headers) {
        if (headersToCopy.indexOf(header) >= 0) {
            headers[header] = req.headers[header];
        }
    }

    requestPromise({ uri, method, body, headers, json: true })
        .then(response => res.send(response))
        .catch(err => res.status(err.statusCode).send(err.error.message));
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
