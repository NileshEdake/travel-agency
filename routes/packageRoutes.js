const express = require('express');
const Package = require('../models/Package');

const router = express.Router();

// POST a new tour package
router.post('/addpackage', async (req, res) => {
  try {
    const newPackage = new Package({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      availableDates: req.body.availableDates,
      image: req.body.image
    });

    await newPackage.save();
    res.status(201).json({ message: 'Package added successfully', package: newPackage });
  } catch (error) {
    res.status(500).send("Error adding package");
  }
});

// Get all packages
router.get('/getpackage', async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).send("Error fetching packages");
  }
});

// Get package details by ID
router.post('/getPackageById', async (req, res) => {
  try {
    const { id } = req.body;  // Get the ID from the request body

    // Find the package by ID
    const packageDetails = await Package.findById(id);

    if (!packageDetails) {
      return res.status(404).json({ message: 'Package not found' });
    }

    res.json(packageDetails);
  } catch (error) {
    res.status(500).send("Error fetching package details");
  }
});

router.get('/search', async (req, res) => {
  try {
    const { query } = req.query; // Get the search query from the URL parameter

    if (!query) {
      return res.status(400).json({ message: 'Query parameter is required' });
    }

    // Use a case-insensitive regex search for title or description
    const packages = await Package.find({
      $or: [
        { title: { $regex: query, $options: 'i' } }, // Search by title (case-insensitive)
        { description: { $regex: query, $options: 'i' } } // Search by description (case-insensitive)
      ]
    });

    if (packages.length === 0) {
      return res.status(404).json({ message: 'No packages found' });
    }

    res.json(packages); // Return the list of found packages
  } catch (error) {
    res.status(500).send("Error searching for packages");
  }
});


module.exports = router;
