// routes/uploadRoutes.js
const express = require('express');
const upload = require('../middleware/upload');
const cloudinary = require('../config/cloudinary'); // Cloudinary config

const router = express.Router();

// Route to upload image to Cloudinary
router.post('/upload', upload.single('image'), async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path); // Upload the image to Cloudinary
    res.json({ imageUrl: result.secure_url }); // Send back the secure URL of the uploaded image
  } catch (error) {
    console.error('Error uploading image:', error);
    res.status(500).json({ message: 'Error uploading image' });
  }
});

module.exports = router;
