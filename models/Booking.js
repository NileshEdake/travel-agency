const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  numberOfTravelers: { type: Number, required: true },
  specialRequests: { type: String },
  packageId: { type: String, required: true },
  status: { type: String, default: 'Pending' }, 
  createdAt: { type: Date, default: Date.now }, 
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
