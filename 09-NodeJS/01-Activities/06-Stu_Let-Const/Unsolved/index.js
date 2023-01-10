// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {
  var message = 'How are you?';

  if (name.length > 0) {
    var message = 'Hello ' + name;
    console.log(message);
  }

  console.log(message);
};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
//we cant redeclare callout if it is declared as a const, but it's fine if they're let variables
const calloutCounter = () => {
  let callout = 'Outside of the loop';
  let counter = 5;
  //by using let with counter, we make sure it isn't accessible outside of the block

  while (counter > 0) {
    let callout = 'Inside the loop';
    console.log(counter, callout);
    counter--;
  }

  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
}; //using var with i would mean that i would hang around and be reused, but using let means i is starting fresh when declared in the next block of code 

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
