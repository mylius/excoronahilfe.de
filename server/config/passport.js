const LocalStrategy = require('passport-local').Strategy;
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

passport.use(new TwitterStrategy({
  consumerKey: keys.twitter.consumerKey,
  consumerSecret: keys.twitter.consumerSecret,
  callbackURL: "/auth/twitter/redirect",
  userProfileURL  : 'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
  passReqToCallback : true,
},
function(token, tokenSecret, profile, done) {
  User.findOne({ twitterID: profile.id_str }).then((currentUser) => {
    if (currentUser) {
      //user already exists
      console.log("user is: " + currentUser);
      done(null,currentUser);
    } else {
      new User({
        name: profile.screen_name,
        firstname: profile.name,
        twitterID: profile.id_str,
        email: profile.emails[0].value,
        picture: profile.photos[0].value,
      }).save().then((newUser) => {
        console.log(profile);
        console.log("new user created: " + newUser);
        done(null,newUser);
      })
    }
  })
}
)
);

passport.use(new FacebookStrategy({
  clientID: keys.facebook.consumerKey,
  clientSecret: keys.facebook.consumerSecret,
  callbackURL: "/auth/facebook/redirect",
  passReqToCallback : true,
  profileFields: ['id', 'emails', 'name']
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
        console.log(profile);
        console.log("new user created: " + newUser);
        done(null,newUser);
      })
    }
    })
  }
));

passport.use("local", new LocalStrategy({ usernameField: 'email' }, (email, password, done) => {
    // Match user
    User.findOne({
      email: email
    }).then(user => {
      if (!user) {
        return done(null, false, { message: 'That email is not registered' });
      }

      // Match password
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, { message: 'Password incorrect' });
        }
      });
    });
  }),
);

