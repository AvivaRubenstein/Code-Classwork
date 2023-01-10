// TODO: Import `maths.js`
const maths = require('./maths.js');

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
const operation = process.argv[2];
const num1 = parseInt(process.argv[3]);
const num2 = parseInt(process.argv[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter

switch(operation) { //we pass operation string into our switch, and it evaluates if it's the right case and runs that code until a break
   //a + b is just concatonating them as strings, we need to set the numbers up to be integers --- parse strings into integers 
    case 'sum':
        console.log(maths.sum(num1, num2));
        break;
    case 'difference':
        console.log(maths.difference(num1, num2));
        break;
    case 'product':
        console.log(maths.product(num1, num2));
        break;
    case 'quotient':
        console.log(maths.quotient(num1, num2));
        break;
    //default is if it doesn't catch anything
    default: console.log("what?");
}
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
