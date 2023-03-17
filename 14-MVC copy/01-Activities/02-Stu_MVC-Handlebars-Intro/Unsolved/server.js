// Dependencies
const express = require('express');
//we will import express-handlebars
const exphbs = require('express-handlebars');
const path = require('path');
//allows us to pass additional configurations (we aren't using that here though)
const hbs = exphbs.create({});


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

//we have to tell express that we are using handlebars as the view engine for express
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
