const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const app = express();
const dotenv = require('dotenv').config();
const https = require('https');
const fs = require('fs');
const port = 4000;


const https_options = {
  key: fs.readFileSync('./security/privkey1.pem'),
  cert: fs.readFileSync('./security/cert1.pem')
};

app.use(morgan("tiny"));
app.options('*', cors()) // include before other routes 
app.use(cors())
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.send("IT'S WORKING!")
})

//Send email
var options = {
  service: "SendGrid",
  auth: {
    user: process.env.SG_API_USER,
    pass: process.env.SG_API_KEY  
  }
};

var transporter = nodemailer.createTransport(options);

app.post("/email", (req, res) => {
  console.log(req.body);
    mailOptions = {
      from: req.body.name + " from <" + req.body.email + ">",
      to: "info@excoronahilfe.de",
      subject: "Anfrage von "+ req.body.name,
      text: "Der Schreibende ist an folgendem interessiert: " + req.body.interests + "\n\n\nEr wohnt im PLZ-Gebiet: " + req.body.zip + "\n\n\nDie Nachricht ist:\n\n" + req.body.text + "\n\n\n Der Nutzer hat den Datenschutz bestimmungen zugestimmt: " + req.body.privacy_accepted
    }
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  res.status(204).send();
});

//Routes


const server = https.createServer(https_options, app)
    .listen(port, () => {
        console.log('server running at ' + port)
    })
