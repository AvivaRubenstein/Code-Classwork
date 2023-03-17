// TODO: Add a comment indicating how this file fits into the MVC framework (is it a Model, a View, or a Controller?) and what it is responsible for handling.

const router = require('express').Router();

// get route for our menu
router.get('/', async (req, res) => {

//we are rendering all.handlebars template
  res.render('all');
});

module.exports = router;
