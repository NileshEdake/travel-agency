const express = require('express');
const Booking = require('../models/Booking');

const router = express.Router();

// POST a new booking
router.post('/addbookings', async (req, res) => {
  try {
    const newBooking = new Booking(req.body);
    await newBooking.save();
    res.status(201).json({ message: 'Booking successful' });
  } catch (error) {
    res.status(500).send("Error making booking");
  }
});

module.exports = router;
