const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
//forward slash part of the url is the database name -- "myfirstmongooseapp"
mongoose.connect('mongodb://127.0.0.1:27017/myfirstmongooseapp', {
  //set up to handle some deprecated warnings
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Export connection 
module.exports = mongoose.connection;
