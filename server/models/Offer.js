const mongoose = require('mongoose');
const OfferSchema = new mongoose.Schema({
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

OfferSchema.index({ "location": "2dsphere" });

const Offer = mongoose.model('Offer', OfferSchema);

module.exports = Offer;