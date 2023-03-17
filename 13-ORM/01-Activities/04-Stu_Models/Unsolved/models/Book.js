const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Book extends Model {}

Book.init(
  {
    //if we don't define any ids, sequelize will create one by default, it will autoincrement and be a primary key
    //but we can manually define it, and then we can choose the name etc
    book_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
    is_paperback: {
      type: DataTypes.BOOLEAN
    }
  },
  {
    //freezeTableName: true   prevents sequelize from automatically pluralizing
    sequelize,
    timestamps: false,
    underscored: true,
    modelName: 'book',
    freezeTableName: true
  }
);

module.exports = Book;
