const express = require('express');
const Package = require('../models/Package');
const authenticateAdmin = require('../middleware/authMiddleware');

const router = express.Router();

// Get all packages (Admin only)
router.get('/', authenticateAdmin, async (req, res) => {
  try {
    const packages = await Package.find();
    res.json(packages);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching packages' });
  }
});

// Add a new package
router.post('/', authenticateAdmin, async (req, res) => {
  try {
    const newPackage = new Package(req.body);
    await newPackage.save();
    res.status(201).json({ message: 'Package added successfully', package: newPackage });
  } catch (error) {
    res.status(500).json({ message: 'Error adding package' });
  }
});

// Get package by ID
router.get('/:id', authenticateAdmin, async (req, res) => {
  try {
    const packageId = req.params.id;
    const packageDetails = await Package.findById(packageId);

    if (!packageDetails) {
      return res.status(404).json({ message: 'Package not found' });
    }

    res.json(packageDetails);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching package details' });
  }
});

// Update a package
router.put('/:id', authenticateAdmin, async (req, res) => {
  try {
    const updatedPackage = await Package.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ message: 'Package updated successfully', package: updatedPackage });
  } catch (error) {
    res.status(500).json({ message: 'Error updating package' });
  }
});

// Delete a package
router.delete('/:id', authenticateAdmin, async (req, res) => {
  try {
    await Package.findByIdAndDelete(req.params.id);
    res.json({ message: 'Package deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting package' });
  }
});

module.exports = router;
