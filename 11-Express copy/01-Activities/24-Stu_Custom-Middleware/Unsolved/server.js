const express = require('express');
const path = require('path');
//our middleware is in the clog file
const { clog } = require('./middleware/clog');
//it's in brackets--- it's destructuring to get the clog 
//we are destructuring it so that we dont have to call it 
//by drilling in : clog.clog();  to call the function

const api = require('./routes/index.js');

const PORT = 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data

//calling our middleware
app.use(clog);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);


app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for feedback page
app.get('/feedback', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
