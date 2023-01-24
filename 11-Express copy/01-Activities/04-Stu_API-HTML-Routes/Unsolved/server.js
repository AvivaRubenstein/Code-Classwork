// TODO: Import express
const express = require('express');
// TODO: Import 'terms.json' file
const terms = require('./terms.json');
const PORT = 3001;

// TODO: Initialize app variable
const app = express();
app.get('/', (req, res) => res.send("visit htt://localhost:3001/terms"))
// TODO: Create a route for a GET request that will return the content of our `terms.json` file
app.get('/terms', (req, res) => res.json(terms));
  //the data is in the terms.json file

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);

