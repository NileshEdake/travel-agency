const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://nileshedake00:Nilesh%40123@travel-agency.gf7ya.mongodb.net/?retryWrites=true&w=majority&appName=travel-agency';

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('Failed to connect to MongoDB Atlas', err);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
