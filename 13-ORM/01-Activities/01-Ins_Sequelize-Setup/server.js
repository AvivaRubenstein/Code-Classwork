const express = require('express');

// Import the connection object
const sequelize = require('./config/connection');

const app = express();
//our port will be our environment variable - if it finds one set up called PORT it'll run there, 
//otherwise port 3001 as a default
//heroku can pass in as an environment configuration 
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to the database before starting the Express.js server
//before starting our server, we are connecting to our db in the config/connection.js file 
//which is exported in sequelize const
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
