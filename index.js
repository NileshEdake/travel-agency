const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const packageRoutes = require('./routes/packageRoutes'); // Make sure this is the correct route
const bookingRoutes = require('./routes/bookingRoutes');   // Same for this route
const adminRoutes = require('./routes/adminRoutes');
const managePackagesRoutes = require('./routes/managePackages');
const viewBookingsRoutes = require('./routes/viewBookings');

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Use routes correctly
app.use('/api/package', packageRoutes);            // Make sure `packageRoutes` is properly imported
app.use('/api/bookings', bookingRoutes);            // Same for `bookingRoutes`
app.use('/api/admin', adminRoutes);
app.use('/api/admin/packages', managePackagesRoutes);     // Also check for this route
app.use('/api/bookings', viewBookingsRoutes);       // Same check here

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
