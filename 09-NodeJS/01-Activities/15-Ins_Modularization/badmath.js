const pie = 'apple';

//this is an arrow function which returns the value 1
const predictable = () => 1;
//to make our file accessible to other files, we make it into a module, and we make it exportable
//and then we import it into the file we want to use it in using "require" keyword
// module.exports is an object we use to store variables or methods
module.exports = {
  pie,
  predictable,
};
