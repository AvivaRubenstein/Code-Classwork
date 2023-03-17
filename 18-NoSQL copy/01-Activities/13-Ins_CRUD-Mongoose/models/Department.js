const mongoose = require('mongoose');

const departmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  lastAccessed: { type: Date, default: Date.now },
});

const Department = mongoose.model('Department', departmentSchema);

const handleError = (err) => console.error(err);

// Will add data only if collection is empty to prevent duplicates
// Note that two documents can have the same name value
Department.find({}).exec((err, collection) => {
  if (err) {
    return handleError(err);
  }
  //as long as the collection is empty, it'll insert these items
  if (collection.length === 0) {
    return Department.insertMany(
      [
        { name: 'Produce' },
        { name: 'Dairy' },
        { name: 'Meat' },
        { name: 'Wine' },
        { name: 'Wine' },
        { name: 'Wine' },
        { name: 'Flowers' },
      ],
      (insertError) =>
        insertError ? handleError(insertError) : console.log('Inserted')
    );
  }
  //if we already have data inside the collection
  return console.log('Already populated');
});

module.exports = Department;
