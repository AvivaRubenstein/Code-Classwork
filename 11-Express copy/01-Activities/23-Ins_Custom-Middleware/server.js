const express = require('express');

const app = express();
const PORT = 3001;
//middleware has request, response, and next parameters, and from there it's just a function
//when finished executing, call next()
//sits btwn request and response, when it's done, goes next() to pass it on to next middleware in the chain or to the route
const middleware = (req, res, next) => {
  // ANSI escape code that instructs the terminal to print in yellow
  const yellow = '\x1b[33m%s\x1b[0m';

  // Log out the request type and resource
  console.log(yellow, `${req.method} request to ${req.path}`);

  // Built-in express method to call the next middleware in the stack.
  next();
};

app.use(middleware);

app.get('/', (req, res) => res.json(`GET route`));
app.post('/', (req, res) => res.json(`POST route`));
//these require an id -- we send a specific id for which specific object we want to refer to -- so that we can update/delete only that one
//we use unique identifiers to make sure which object we are accessing
app.put('/:id', (req, res) => res.json(`PUT route`));  //updates an object
app.delete('/:id', (req, res) => res.json(`DELETE route`)); //to delete that object
app.patch('/:id', (req, res) => res.json(`PATCH route`)); //to update without passing in all of the values-- can omit the parts of the object we arent updating

app.listen(PORT, () =>
  console.log(`Listening for requests on port ${PORT}! 🏎️`)
);

//we use to console.log inside each of the routes responses, but we could just do it once inside the middleware