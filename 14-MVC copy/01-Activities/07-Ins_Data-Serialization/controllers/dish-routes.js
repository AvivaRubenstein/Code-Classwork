const router = require('express').Router();
const Dish = require('../models/Dish');

// // get one dish without serializing data
// //dish endpoint to grab a particular dish
// router.get('/dish/:id', async (req, res) => {
//   try {
//     //we are looking up a dish by its id/primary key
//     const dishData = await Dish.findByPk(req.params.id);
//     //log data out to terminal
//     console.log(dishData)
//     //attempt to render that data:
//     //but- the problem is we are getting back a dish object, with the information
//     //inside dataValues --- it's being passed back in a different format, 
//     //we aren't getting anything on the 
//     //this doesn't use data serialization
//     res.render('dish', dishData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// get one dish with serialized data
router.get('/dish/:id', async (req, res) => {
  try {
  // Search the database for a dish with an id that matches params
  const dishData = await Dish.findByPk(req.params.id);
  console.log(dishData)
  // We use .get({ plain: true }) on the object to serialize it so that it only includes the data that we need. 
  //we are getting the data back in a format we can understand
  //we just get back the object we want (everything that WAS inside data_values)
  const dish = dishData.get({ plain: true });
  // Then, the 'dish' template is rendered and dish is passed into the template.
  res.render('dish', dish);
  } catch (err) {
      res.status(500).json(err);
  }
});

module.exports = router;

