//uses arithmetic module from another file
const Arithmetic = require('./arithmetic');

//this is an object -- several prototypes are assigned to arithmatic constructor, and we are able to import them into index.js
const value = new Arithmetic(4)
  .plus(8)
  .plus(15)
  .minus(16)
  .minus(23)
  .plus(42)
  .plus(108)
  .value();

console.log(value);
//should return 138

