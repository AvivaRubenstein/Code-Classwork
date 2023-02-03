const express = require('express');

const PORT = 3001;
const reviews = require('./db/reviews');

const app = express();

// Middleware for parsing application/json and urlencoded data
//will help us parse anything that's a json object in the request body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET request for ALL reviews
app.get('/api/reviews', (req, res) => {
  // Log our request to the terminal
  console.info(`${req.method} request received to get reviews`);

  // Sending all reviews to the client
  return res.json(reviews);
});

// POST request to add a review
app.post('/api/reviews', (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to add a review`);

  // Prepare a response object to send back to the client
  let response;

  // Check if there is anything in the response body, and if there is a product name sent to it
  if (req.body && req.body.product) {
    //creating a json object to send back to the user, with the request's entire body in it (under data key)
    response = {
      status: 'success',
      data: req.body,
    };
    res.json(`Review for ${response.data.product} has been added!`);
  } else {
    res.json('Request body must at least contain a product name');
  }

  // Log the response body to the console
  console.log(req.body);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
