const LocalStrategy = require('passport-local');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const TwitterStrategy = require('passport-twitter');
const FacebookStrategy = require('passport-facebook');
const bcrypt = require('bcryptjs');
const keys = require('./keys');
// Load User model
const User = require('../models/User');



passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});




passport.use("google", new GoogleStrategy({
    callbackURL: "/auth/google/redirect",
    clientID: keys.google.ClientID,
    clientSecret: keys.google.ClientSecret,
  }, (accessToken, refreshToken, profile, done) => {
    //check for existing user
    User.findOne({ googleID: profile.id }).then((currentUser) => {
      if (currentUser) {
        //user already exists
        console.log("user is: " + currentUser);
        done(null,currentUser);
      } else {
        //create new user and store to mongodb
        new User({
          name: profile.displayName,
          firstname: profile.name.givenName,
          lastname: profile.name.familyName,
          googleID: profile.id,
          email: profile.emails[0].value,
          picture: profile.photos[0].value,
        }).save().then((newUser) => {
          console.log("new user created: " + newUser);
          done(null,newUser);
        })
      }
    })
  }
  )
);

passport.use("twitter", new TwitterStrategy({
  consumerKey: keys.twitter.consumerKey,
  consumerSecret: keys.twitter.consumerSecret,
  callbackURL: "/auth/twitter/redirect",
  userProfileURL  : 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
  profileFields: ['id', 'displayName', 'username', 'photos', '_json'],
},
function(token, tokenSecret, profile, done) {
  User.findOne({ twitterID: profile.id_str }).then((currentUser) => {
    if (currentUser) {
      //user already exists
      console.log("user is: " + currentUser);
      done(null,currentUser);
    } else {
      new User({
        name: profile.username,
        firstname: profile.displayName,
        twitterID: profile.id_str,
        email: profile.emails[0].value,
        picture: profile.photos[0].value, 
      }).save().then((newUser) => {
        console.log("new user created: " + newUser);
        done(null,newUser);
      })
    }
  })
}
)
);

passport.use("facebook", new FacebookStrategy({
  clientID: keys.facebook.consumerKey,
  clientSecret: keys.facebook.consumerSecret,
  callbackURL: "/auth/facebook/redirect",
  profileFields: ['id', 'displayName', 'emails', 'photos'],
},
function(accessToken, refreshToken, profile, done) {
  User.findOne({ facebookID: profile.id }).then((currentUser) => {
    if (currentUser) {
      //user already exists
      console.log("user is: " + currentUser);
      done(null,currentUser);
    } else {
      new User({
        name: profile.displayName,
        firstname: profile.name.givenName,
        lastname: profile.name.familyName,
        facebookID: profile.id,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
      }).save().then((newUser) => {
        console.log("new user created: " + newUser);
        done(null,newUser);
      })
    }
    })
  }
));

passport.use('local', new LocalStrategy({
  usernameField: "email",
  passwordField: "password"
},
  function(email, password, done) {
    User.findOne({
      email: email
    }).then(currentUser => {
      if (currentUser) {
         if (bcrypt.compare(password, currentUser.password)){
            return done(null, currentUser);
          } else {
            return done(null, false, { message: 'Password incorrect' });
          }
      }
      else {  
        var newUser = new User();
        newUser.email = email;
        newUser.password = password;
        newUser.save().then((newUser) => {
          console.log("new user created: " + newUser);
          done(null,newUser);
            })
        }
      });
    }
  ),
);

