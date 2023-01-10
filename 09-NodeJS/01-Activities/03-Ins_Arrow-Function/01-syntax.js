// All of the `createGreeting` functions are equivalent
var createGreeting = function(message, name) {
  return message + ", " + name + "!";
};

// We can safely swap out function expressions with arrow functions most of the time
var createGreeting = (message, name) => {
  return message + ", " + name + "!";
};
//omits the keworword "function", goes straight to parameters, and put an arrow in btwn the ()s and the curly brackets


// If the arrow function body contains only one expression, we can omit the curly braces and auto return it
var createGreeting = (message, name) => message + ", " + name + "!";

// If an arrow function only has one parameter, we can omit the parens () around the single parameter
var greet = greeting => console.log(greeting);

// We call arrow functions the same way as we call regular functions
//can store function inside a var same as usual js
var greeting = createGreeting("Hello", "Angie");

// Logs "Hello, Angie!";
greet(greeting);
