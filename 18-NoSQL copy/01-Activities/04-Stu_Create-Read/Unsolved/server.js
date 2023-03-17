const express = require('express');
//import mongodb package
const { MongoClient } = require('mongodb');

const app = express();
const port = 3001;

//connect to mongoDB
const connectionStringURI = `mongodb://127.0.0.1:27017`;

//initialize new instance of MongoClient
const client = new MongoClient(connectionStringURI);

//variable to hold our connection to the database
let db;

//variable to hold our database's name
const dbName = 'inventoryDB';

//actually connect to the mongo server
client.connect()
  .then(() => {
    console.log('Connected successfully to MongoDB');
    //add a new database instance with mongo's client.db constructor, with the name we stored in the variable dbName
    db = client.db(dbName);

    //start the server up with express
    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error('Mongo connection error: ', err.message);
  });

//middleware to parse requests into json 
app.use(express.json());


//route to create a new collection with a document inside of it
app.post('/create', (req, res) => {
  //creating a document based on the title and author in the req body
  db.collection('bookCollection').insertOne(
    { title: req.body.title, author: req.body.author }
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

//route to create many documents into the bookCollection collection
app.post('/create-many', (req, res) => {
  db.collection('bookCollection').insertMany(
    [
      { "title": "Oh the Places We Will Go!" },
      { "title": "Diary of Anne Frank" }
    ]
  )
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});

//route to find everything in the bookCollection collection
app.get('/read', (req, res) => {
  db.collection('bookCollection')
    .find({})
    .toArray()
    .then(results => res.json(results))
    .catch(err => {
      if (err) throw err;
    });
});
