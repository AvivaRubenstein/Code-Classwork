const router = require('express').Router();
const { Traveller, Trip, Location } = require('../../models');

// GET all travellers
router.get('/', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

// GET a single traveller
router.get('/:id', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

// CREATE a traveller
router.post('/', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

// DELETE a traveller
router.delete('/:id', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

module.exports = router;
