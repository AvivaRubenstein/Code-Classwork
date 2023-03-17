// returns the average value of an array of numbers
function avg(array) {
  function sum() {
    let total = 0;
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
    //we need to return total, or else it won't be accessible outside of the sum function 
    //-- we changed the execution of the code, not the variables scope
    return total;
  }
  
  //we need to actually call the sum function
  return sum()/array.length;
}

module.exports = avg;
