const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  firstname: {
    type: String,
    required: false
  },
  lastname: {
    type: String,
    required: false
  },
  googleID: {
    type:String,
    required: false,
  },
  twitterID: {
    type:String,
    required: false,
  },
  facebookID: {
    type:String,
    required: false,
  },
  zip: {
      type: Number,
      required: false
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    required: false
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;