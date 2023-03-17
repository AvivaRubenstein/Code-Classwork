const Sequelize = require('sequelize');

//enable access to .env variables
//.config sets everything up for us
require('dotenv').config();

//use environment variables to connect to database
const sequelize = new Sequelize(
  //process.env is node's way of finding environment variables
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
