function Algo() {}

Algo.prototype.reverse = function(str) {
  // TODO: Your code here
  //we need to split our string into an array, and then we can do reverse to the array, and then we join/unsplit it again
  var reversed = str.split("").reverse().join("");
  return reversed;
};

Algo.prototype.isPalindrome = function(str) {
  // TODO: Your code here
  const result = this.reverse(str)
  return result === str;
};

Algo.prototype.capitalize = function(str) {
  // TODO: Your code here 
  return str.split(" ").map((word) => {
  return word.substring(0, 1).toUpperCase() + word.substring(1)
  }).join(" ")
};

module.exports = Algo;
