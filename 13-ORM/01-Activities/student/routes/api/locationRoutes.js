const router = require('express').Router();
const { Location, Traveller, Trip } = require('../../models');

// GET all locations
router.get('/', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

// GET a single location
router.get('/:id', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

// CREATE a location
router.post('/', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

// DELETE a location
router.delete('/:id', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

module.exports = router;
