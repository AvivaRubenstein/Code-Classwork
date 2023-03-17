const router = require('express').Router();
const { Trip } = require('../../models');

// CREATE a trip
router.post('/', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

// DELETE a trip
router.delete('/:id', async (req, res) => {
  res.status(404).json({ message: 'TODO PUT REAL CODE HERE!' });
});

module.exports = router;
