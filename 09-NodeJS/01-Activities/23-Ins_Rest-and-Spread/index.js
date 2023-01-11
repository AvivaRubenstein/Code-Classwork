// without rest --function that adds x + y
function add(x, y) {
  return x + y;
}
console.log(add(1, 2, 3, 4, 5)); // => 3
//the function is only accepting 2 parameters--- we may want to allow user to pass as many items as they want into the parameters
//so that they can add as many numbers as they'd want

// 1. rest
//rest is a way to say our function will accept an unlimited num of parameters/arguments
//syntax:  ...nums  ---allows for unlimited nums parameters
function add(...nums) {
  let sum = 0;
  //for-of here allows us to loop through as many nums as there are 
  for (let num of nums) sum += num;
  return sum;
}

add(1); // => 1
add(3, 3); // => 6
add(1, 1, 4, 5); // => 11

// 2. (still using rest operator)
//we are printing out how many arguments are being passed in, they are stored inside of args array
function howManyArgs(...args) {
  return `You passed ${args.length} arguments.`; // point out the template literal
}

console.log(howManyArgs(0, 1)); // You have passed 2 arguments.
console.log(howManyArgs("argument!", null, ["one", 2, "three"], 4)); // You have passed 4 arguments.

// 1. spread
//allows us to take all the elements in an array and spread them out into a new array with other stuff
//take everything inside the dragons array, and inserts all of them into the weapons array
// ...dragons means including everything from dragons array to be stored in new array
const dragons = ["Drogon", "Viserion", "Rhaegal"];
const weapons = ["dragonglass", ...dragons, "wildfire"]; // notice the spread operator ...dragons

console.log(weapons); // prints ["dragonglass", "Drogon", "Viserion", "Rhaegal", "wildfire"]
