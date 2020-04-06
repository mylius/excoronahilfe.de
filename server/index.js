const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const passport = require("passport");
const passportSetup = require("./config/passport.js");
const cookieSession = require("cookie-session");
const nodemailer = require("nodemailer");
const sgTransport = require("nodemailer-sendgrid-transport");
const app = express();
const https = require('https');
const fs = require('fs');
const port = 4000;
const auth_routes = require("./routes/auth_routes.js");
const keys = require('./config/keys')
const jsonParser = bodyParser.json();
const https_options = {
  key: fs.readFileSync('./security/privkey1.pem'),
  cert: fs.readFileSync('./security/cert1.pem')
};

//Create and encrypt cookie
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [keys.session.cookieKey]
}))


//initialize passport
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan("tiny"));
app.options('*', cors()) // include before other routes 
app.use(cors());
app.use("/auth", jsonParser,auth_routes);
app.use(bodyParser.json());

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
  auth: {
    api_user: keys.sendgrid.sg_user,
    api_key: keys.sendgrid.sg_key
  }
};


var transporter = nodemailer.createTransport(sgTransport(options));

app.post("/email", (req, res) => {
  console.log(req.ip);
  if (req.ip == "::ffff:127.0.0.1") {
    mailOptions = {
      from: req.body.name + " from <" + req.body.email + ">",
      to: "info@excoronahilfe.de",
      subject: req.body.subject,
      text: req.body.text
    }
    console.log(req.body);
    console.log("set options");
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log("done");
  };
});

//Routes


const server = https.createServer(https_options, app)
  .listen(port, () => {
    console.log('server running at ' + port)
  })