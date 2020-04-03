const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const app = express();
const dotenv = require('dotenv').config();

app.use(morgan("tiny"));
app.options('*', cors()) // include before other routes 
app.use(cors())
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({
    message: "Behold The MEVN Stack!"
  });
});


//Send email
var options = {
  auth: {
    api_user: process.env.SG_API_USER,
    api_key: process.env.SG_API_KEY  
  }
};

var transporter = nodemailer.createTransport(sgTransport(options));

app.post("/email", (req, res) => {
  console.log(req.body);
    mailOptions = {
      from: req.body.name + " from <" + req.body.email + ">",
      to: "info@excoronahilfe.de",
      subject: req.body.subject,
      text: req.body.text
    }
  
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
});

//Routes


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`listening on ${port}`);
});




