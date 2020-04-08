const mongoose = require('mongoose');
const NeedSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  zip:{
      type: String,
      required: true
  },
  location: {
    type: { type: String },
    coordinates: [],
  },
  userID: {
    type:String,
    required: true,
  },
  interests: {
      type: Array,
      required: true
  }
});

NeedSchema.index({ "location": "2dsphere" });

const Need = mongoose.model('Need', NeedSchema);

module.exports = Need;