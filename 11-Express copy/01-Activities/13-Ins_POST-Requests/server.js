const express = require('express');

const PORT = 3001;

const app = express();

// GET request
app.get('/api/reviews', (req, res) => {
  // Let the client know that their request was received
   //we are putting in their request method into the string, so it will say it's a get request
   //this is being put onto the page at that endpoint -- this is what the api is returning
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  //it's telling us about who made the request/what device and browser they used
  console.info(req.rawHeaders);

  // Log our request to the terminal
  //console logging out the type of request received
    console.info(`${req.method} request received`);
});

// POST request
app.post('/api/reviews', (req, res) => {
  // Let the client know that their POST request was received
  res.json(`${req.method} request received`);

  // Show the user agent information in the terminal
  console.info(req.rawHeaders);

  // Log our request to the terminal
  console.info(`${req.method} request received`);
});

app.listen(PORT, () =>
  console.log(`Express server listening on port ${PORT}!`)
);
