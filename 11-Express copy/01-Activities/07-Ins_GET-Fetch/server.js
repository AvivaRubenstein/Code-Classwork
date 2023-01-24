const express = require('express');
const path = require('path');
//this is our database info
const termData = require('./db/terms.json');
const PORT = 3001;

const app = express();

// Sets up the Express app to handle data parsing
//urlencoded --- browser doesnt know how to handle spaces etc, 
//url encoding -- express can handle putting in the correct symbols etc
app.use(express.urlencoded({ extended: true }));
//we can accept json requests, express can handle that for us
app.use(express.json());

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/api/terms', (req, res) => res.json(termData));

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
