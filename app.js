const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const nodemailer = require('nodemailer');
const requestPromise = require('request-promise');

const app = express();
const port = process.env.PORT || 3000;

const USER_ENDPOINT = 'http://213.181.208.165:8080/rft-rest-api/user/';
const REGISTER_ENDPOINT = 'http://213.181.208.165:8080/rft-rest-api/upload/';
const OAUTH_URL = 'http://213.181.208.165:8080/rft-rest-api/oauth/token';

const CLIENT_ID = process.env.CLIENT_ID;
const CLIENT_SECRET = process.env.CLIENT_SECRET;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

const oauth = {
    'grant_type': 'password',
    'client_id': CLIENT_ID
}

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_EMAIL,
        pass: process.env.GMAIL_PASS
    }
});

app.post('/api/register', (req, res) => {
    const uri = REGISTER_ENDPOINT
    const method = 'POST';
    const body = req.body;
    const headers = req.headers;

    requestPromise({ uri, method, body, headers, json: true })
        .then(response => res.send({ message: response }))
        .catch(err => res.status(err.statusCode).send(err));
});

app.use('/api/user/*', (req, res) => {
    const uri = USER_ENDPOINT + req.originalUrl.split('user/')[1];
    const method = req.method;
    const body = req.body;
    const headers = req.headers;

    requestPromise({ uri, method, body, headers, json: true })
        .then(response => {
            console.log(response)
            res.send(response)}
        )
        .catch(err => {
            console.log(err)
            res.status(err.statusCode).send(err)
        });
});

app.post('/api/oauth/token', (req, res) => {
    const method = 'POST';
    const headers = {
        'Authorization': 'Basic ' + Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64'),
        'Content-type': 'application/x-www-form-urlencoded; charset=utf-8',
    };

    const data = { ...oauth, ...req.body };
    const body = Object.keys(data).map(key => key + '=' + data[key]).join('&');

    requestPromise({ uri: OAUTH_URL, method, body, headers, json: true })
        .then(response => res.send(response))
        .catch(err => res.status(err.statusCode).send(err));
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
