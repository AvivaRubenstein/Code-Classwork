// 1. const can be used for values which we will not reassign
//instead of doing var age =25; 
//const = a constant variable
const age = 25;

age++; // TypeError: Assignment to constant variable.
//we can modify the data if it's inside a const object or array, but if it's a const variable we can't reassign it
//age here is a primitve data type, and we can't change it if it's a const

// ==========================================================================

// const name = "";

// name = "Cherie"; // TypeError: Assignment to constant variable.

// ==========================================================================

// 2. const doesn't mean `constant value`, instead means `constant reference`

//we aren't changing what the const is REFERRING to, we are just modifying the object/array's contents

// Unlike primitive data types, objects and arrays are passed by reference, rather than passed by value
// const beatles = ["John", "Paul", "Ringo"];
//  we can't set this const to be = to something else
//  but we can push something more into it
//  we can't reassign beatles, but we can modify what it references (the array)
// beatles.push("George");

// This works because by updating an array's contents, we aren't changing the reference to the underlying array
// console.log(beatles); // Prints `["John", "Paul", "Ringo", "George"]`

// console.log(beatles);

// const person = { name: "Brianna", age: 11 };
// person.age++;
// person.favoriteMovie = "Spider-Man";
// person.name = "Carla";

//person is constant and can't be reassigned, but the info that it references can be modified 

// console.log(person); // Prints `{ name: 'Carla', age: 12, favoriteMovie: 'Spider-Man' }`

// ==========================================================================

// 3. While we can MODIFY arrays and objects that are using `const`, we can't reassign them

// const item = {
//   id: 23,
//   title: "Underwater Basket-Weaving DVD",
//   price: "$17.99"
// };

// item.price = "$1.99";

// console.log(item);

// item = {
//   id: 11,
//   title: "Underwater Basket-Weaving Shoes",
//   price: "$101.43"
// }; // TypeError: Assignment to constant variable.

// const ninjaTurtles = [];

// The same rules apply to arrays, we can MODIFY them, but not completely reassign them

// ninjaTurtles = [
//   "Michaelangelo",
//   "Leonardo",
//   "Raphael",
//   "Donatello"
// ]; // TypeError: Assignment to constant variable.
