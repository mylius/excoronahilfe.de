const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const passport = require("passport");
const passportSetup = require("./config/passport.js");
const cookieSession = require("cookie-session");
const nodemailer = require("nodemailer");
const app = express();
const https = require('https');
const fs = require('fs');
const port = 4000;
const auth_routes = require("./routes/auth_routes.js");
const need_routes = require("./routes/need.js");
const offer_routes = require("./routes/offer.js");
const keys = require('./config/keys')
const jsonParser = bodyParser.json();
const https_options = {
  key: fs.readFileSync('./security/privkey1.pem'),
  cert: fs.readFileSync('./security/cert1.pem')
};

app.options('*', cors()) // include before other routes 
app.use(cors());

//Create and encrypt cookie
app.use(cookieSession({
  name: "session",
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}))


//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("tiny"));
app.use(bodyParser.json());
app.use("/auth", jsonParser,auth_routes);
app.use("/need", need_routes);
app.use("/offer", offer_routes);


app.get("/", (req, res) => {
  res.json({
    message: "Server running"
  });
});



// DB Config
// Connect to MongoDB
mongoose
  .connect(
    keys.mongoURI,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));



//Send email
var options = {
  service: "SendGrid",
  auth: {
    user: keys.sendgrid.sg_user,
    pass: keys.sendgrid.sg_key  
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