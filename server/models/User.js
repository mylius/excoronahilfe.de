const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
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

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;