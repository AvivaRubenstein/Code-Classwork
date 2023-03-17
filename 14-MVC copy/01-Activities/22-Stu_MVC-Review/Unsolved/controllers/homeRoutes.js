const router = require('express').Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  // TODO: Render template with Sequelize data
 try{
  const dbUser =  await User.findAll();
  const userData =  dbUser.map((user) => 
  user.get({ plain: true })
  );
  res.render('homepage', {userData});

 } catch (err) {console.log(err);
}

  
});

module.exports = router;
