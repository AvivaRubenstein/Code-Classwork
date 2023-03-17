const express = require('express');
const db = require('./config/connection');
// Require model
const { Department } = require('./models');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Creates a new department
//we can put the new dept name at the end of the url to make the name/request parameter
app.post('/new-department/:department', (req, res) => {
  //creating a new instance of the Department model (which has the department schema)
  const newDepartment = new Department({ name: req.params.department });
  //we called .save() to get this new instance into the database
  //Department.create({name: sdfjkla}) is when we use the model directly, but with .save it's saving it 
  //after we instantiate it with the NEW keyword
  //need to save an instance when we create it with the NEW keyword
  //whereas with create it saves that instance directly without needing to .save()
  newDepartment.save();
  if (newDepartment) {
    res.status(201).json(newDepartment);
  } else {
    console.log('Uh Oh, something went wrong');
    res.status(500).json({ error: 'Something went wrong' });
  }
});

// Finds all departments
app.get('/all-departments', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  Department.find({}, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});

// Finds the first matching document
//we pass in an object with the item we are trying to match, in this case name: Wine
app.get('/find-wine-department', (req, res) => {
  // Using model in route to find all documents that are instances of that model
  Department.findOne({ name: 'Wine' }, (err, result) => {
    if (result) {
      res.status(200).json(result);
    } else {
      console.log('Uh Oh, something went wrong');
      res.status(500).json({ error: 'Something went wrong' });
    }
  });
});

// Finds first document matching parameter and deletes
// For demo, use 'Wine' as URL param
app.delete('/find-one-delete/:departmentName', (req, res) => {
  Department.findOneAndDelete(
    { name: req.params.departmentName },
    (err, result) => {
      if (result) {
        res.status(200).json(result);
        console.log(`Deleted: ${result}`);
      } else {
        console.log('Uh Oh, something went wrong');
        res.status(500).json({ error: 'Something went wrong' });
      }
    }
  );
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
