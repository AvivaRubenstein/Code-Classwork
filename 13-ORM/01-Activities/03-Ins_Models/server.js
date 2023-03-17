const express = require('express');
const sequelize = require('./config/connection');

// Import model to sync table with database
const Book = require('./models/Book');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Force true to drop/recreate table(s) on every sync
//force our database to drop all of our tables and recreate them on every sync/every time we start our server
//this is great for when we are in a development environment
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
