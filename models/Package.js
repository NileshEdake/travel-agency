const mongoose = require('mongoose');

const packageSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  availableDates: [String],
  image: String,
});

const Package = mongoose.model('Package', packageSchema);

module.exports = Package;
