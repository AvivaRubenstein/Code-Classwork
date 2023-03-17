const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema(
{
  title: String,
  price: Number
}
);
const librarySchema = new mongoose.Schema({
  name: { type: String, required: true },
  //
  // TODO: Add the `books` subdocument to the parent document as an array
  books: [bookSchema],
  lastAccessed: { type: Date, default: Date.now },
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);
// TODO: Create a new instance of the model including the subdocuments

//bookData array will be inserted into the Library Document as a subdocument
const bookData = [
  {title: "To Kill a Mockingbird", price: 7},
  {title: "Much Ado About Nothing", price: 9},
  {title: "The Way of Kings", price: 16}
]

Library.create(
 {name: "West Hempstead Public Library", 
  books: bookData
 } ,
 (err, data) => {
  if(err) {
    console.error(err);
  }
  console.log(data);
 }
);

module.exports = Library;
