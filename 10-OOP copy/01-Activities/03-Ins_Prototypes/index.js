//Prototypes: 
// Array.prototype.forEach()
const myArray = [2, 4, 6, 8];
//forEach is a prototype of all arrays
myArray.forEach((num) => console.log(num));

// String.prototype.toLowerCase()
const person = {
  name: 'Eric',
  age: 28,
  occupation: 'Full-Stack Web Developer',
};

console.log(person.occupation.toLowerCase());

// Prototype methods on constructor function
function Movie(title, releaseYear) {
  this.title = title;
  this.releaseYear = releaseYear;
}

const superman = new Movie('Superman', 1978);

//we are defining a prototype for our Movie objects --- this logInfo function is a prototype
Movie.prototype.logInfo = function () {
  console.log(`${this.title} was released in ${this.releaseYear}`);
};

superman.logInfo();
