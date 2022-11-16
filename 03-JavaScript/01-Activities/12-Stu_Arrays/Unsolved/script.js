// WRITE YOUR CODE HERE
var names = ["Matthew", "Alex", "Savita", "Analise", "Angela"];

for (x=0;  x < names.length; x++) {
console.log("Welcome to the class, " + names[x]);
}

names[0] = "Susan";

if (names[0] != "Matthew") {
    console.log(names[0] + " is in class");
}
