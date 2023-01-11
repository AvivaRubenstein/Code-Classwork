// Exercise 1
const songs = ['Creep', 'Everlong', 'Bulls On Parade', 'Song 2', 'What I Got'];

// TODO: Which operator is being used here?
//this is the spread operator, bc rest operator is our way of saying we can have unlimited arguments/parameters, but here we are saying 
//that everything in the songs array would be put into this newSongs array
const newSongs = [...songs];

// TODO: What do you expect to be logged in the console?
//this prints out the entire array of songs
console.log(newSongs);

// Exercise 2
const addition = (x, y, z) => {
  const array = [x, y, z];
  // TODO: What does the reduce() method do?
  //reduce reduces everything inside our function into one value
  //we passed our function to reduce method
  //we have an accumulator that we have initialized to zero
  //accumulator + first value, now accumulator = 1
  //we take that 1 and add it to the second value in the array
  //now accumulator = 3, and we add third value to the accumulator so now accumulator = 6
  return array.reduce((a, b) => a + b, 0);
};
// TODO: What do you expect to be logged in the console?
console.log(addition(1, 2, 3));

// TODO: What is this syntax that is being used as the parameter?
//rest syntax takes all the items being passed in and makes them into an array
const additionSpread = (...array) => {
  return array.reduce((a, b) => a + b, 0);
};

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3));

// TODO: What do you expect to be logged in the console?
console.log(additionSpread(1, 2, 3, 4, 100));
