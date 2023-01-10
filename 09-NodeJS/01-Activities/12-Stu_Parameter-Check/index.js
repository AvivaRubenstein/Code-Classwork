const a = process.argv[2];
//index 2 of the arguments we are putting into command line will be stored as const a 
const b = process.argv[3];

//comparing using a conditional statement
if (a ===b) {
    console.log(true);
} else {
    console.log(false);
}

//ternary operator
//if the statement before the ? is true, it returns the first value (true) and if not, it puts out the second value/false
// equation?  returned-if-true : returned-if-not-true
console.log(a===b ? true : false);

//just comparing the variables
console.log(a ===b );