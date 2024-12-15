const express = require('express');
const Booking = require('../models/Booking');
const authenticateAdmin = require('../middleware/authMiddleware'); // JWT Authentication middleware

const router = express.Router();


// Route to get all bookings
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    // Fetch all bookings, populating the packageId to get the package details
    const bookings = await Booking.find().populate('packageId');
    res.json(bookings); // Return the list of bookings
  } catch (error) {
    console.error('Error fetching bookings:', error);
    res.status(500).json({ message: 'Error fetching bookings' });
  }
});

// Route to get a booking by ID
router.get('/:id', authenticateAdmin, async (req, res) => {
  try {
    // Fetch the booking by its ID
    const booking = await Booking.findById(req.params.id).populate('packageId');

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.json(booking); // Return the booking details
  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ message: 'Error fetching booking' });
  }
});

// Route to update booking status (e.g., Confirm, Cancel, etc.)
router.put('/:id', authenticateAdmin, async (req, res) => {
  const { status } = req.body; // Status to be updated

  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Update the booking status
    booking.status = status || booking.status;

    await booking.save();
    res.json({ message: 'Booking status updated successfully', booking });
  } catch (error) {
    console.error('Error updating booking:', error);
    res.status(500).json({ message: 'Error updating booking' });
  }
});

// Route to delete a booking
router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    // Delete the booking
    await booking.deleteOne();
    res.json({ message: 'Booking deleted successfully' });
  } catch (error) {
    console.error('Error deleting booking:', error);
    res.status(500).json({ message: 'Error deleting booking' });
  }
});

module.exports = router;
