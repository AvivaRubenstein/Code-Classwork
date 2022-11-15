var a = "50";
var b = 50;
var c = 100;
var d = c % b;
var e = c / 2;

var expression1 = (b === e);
var expression2 = (e < d);

// Use comparison operators so all expressions below log to the console as true
console.log(a === b);  // make it == 
console.log(b !== e);  // make it ===
console.log(c < b);    //b < c
console.log(d > 0);   // >=  or ==

// Use logical operators so all expressions below log to the console as true
console.log(expression1 && expression2);   //  make it || 
console.log( !expression1 || expression2); // !expression2
  
