//for-of loops:
// 1. Using arrays
const songs = ['Bad Guy', 'The Wheels on the Bus', 'Friday'];
//for-of loops through the values in the array
//we are looping over songs, and the value we declare which represents the one that's currently being looped over is assigned as a const (song), and then we can use that inside the loop
for (const song of songs) {
  console.log(song);
}

/* Output:
  Bad Guy
  The Wheels on the Bus
  Friday
*/

console.log('\n================================================\n');

// 2. Using multidimensional arrays (an array of arrays)
const moreSongs = [
  ['Bad Guy', 1],
  ['The Wheels on the Bus', 2],
  ['Friday', 3],
];

// for-of loop:
//when we loop through them, the entire array is output for each
for (const song of moreSongs) {
  console.log(song);
}

/* Output:
  Bad Guy's chart position is 1
  The Wheels on the Bus's chart position is 2
  Friday's chart position is 3
*/
