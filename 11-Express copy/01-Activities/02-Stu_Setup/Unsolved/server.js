const express = require('express');
const path = require('path');

//calling express to use it for the app
const app = express();
const PORT = 3001;

// TODO: Invoke app.use() and serve static files from the '/public' folder
app.use(express.static('public'));

//app.get('/route')  is defining the route and the method (get)
//and then we have a callback function which is used to handle the requests that come in
//we are handling the request and response objects --- we create the responses in the callback function 
//--the response is to send a file to the users
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
//double underscore "durr" dirname -- we are looking for the right file to open using .path
  res.sendFile(path.join(__dirname, 'public/send.html'))
);

// TODO: Create a route that will serve up the `public/paths.html` page
app.get('/paths', (req, res) => 
  res.sendFile(path.join(__dirname, 'public/paths.html'))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
