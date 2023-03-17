const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// Create a new Sequelize model for books
class Book extends Model {}
//extending = taking another object and having its properties be inherited by the new object we are creating
//it will inherit everything that's part of seqeulize's Model
//goal: to objectify our database as an object
//our book will be a Model 

//we can use Model's .init method 
//we are passing 2 parameters into the function, but they are both objects
//the first represents how we want to structure the table
//second param/object specifies some properties of the table
Book.init( //a new way of creating tables with sequelize's .init()
  // Define fields/columns on model
  // An `id` is automatically created by Sequelize, though best practice would be to define the primary key ourselves
  {
    //title, author, isbn, pages, edition, ispaperback columns
    //we are defining what type of data to take in:  .STRING, .INTEGER, .BOOLEAN
    title: {
      type: DataTypes.STRING
    },
    author: {
      type: DataTypes.STRING
    },
    isbn: {
      type: DataTypes.STRING
    },
    pages: {
      type: DataTypes.INTEGER
    },
    edition: {
      type: DataTypes.INTEGER
    },
    // Will become `is_paperback` in table due to `underscored` flag
    isPaperback: {
      type: DataTypes.BOOLEAN
    }
  },
  //these are options to specify properties of the table 
  //sequelize by default will create an id column as an integer
  //will also auto create created_at and updated_ad columns which we leave our by spedifying we
  //dont want timestamps
  //model name will be book
  //underscores means names will be separated by underscores
  {
    // Link to database connection so it knows where to create this table 
    sequelize,
    // Set to false to remove `created_at` and `updated_at` fields
    timestamps: false,
    underscored: true,
    //modelName is the table name (will be books plural by default)
    modelName: 'book'
  }
);

module.exports = Book;
