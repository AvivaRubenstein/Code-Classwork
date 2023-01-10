const arya = {
  first: "Arya",
  last: "Stark",
  origin: "Winterfell",
  allegiance: "House Stark"
};

const greeting = `My name is ${arya.first}!
I am loyal to ${arya.allegiance}.`;

console.log(greeting); // prints
// My name is Arya!
// I am loyal to House Stark.

//template literals:  use a backtick instead of a single or double quote
// use a ${variable}
//can concatonate any variable as a string using template literals