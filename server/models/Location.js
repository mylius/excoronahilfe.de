const mongoose = require('mongoose');
const LocationSchema = new mongoose.Schema({

  location: {
    type: { type: String },
    coordinates: [],
  }

});

LocationSchema.index({ "location": "2dsphere" });

const Location = mongoose.model('Location', LocationSchema);

module.exports = Location;