const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO: Why is the 'binarySearch' function not running properly??
function binarySearch(array, element) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    //math.floor rounds to get an array index
    let mid = Math.floor((start + end) / 2);

    if (array[mid] === element) {
      //if the element matches the middle number in the array, return true
      return true;
      //if the middle item is less than the element we are searching for, we are making our search start higher than the mid by 1
    } else if (array[mid] < element) {
      start = mid + 1;
      //if the middle item is higher than the element we are searching for, we set our end to be lower than the mid position
    } else {
      end = mid - 1;
    }
  }
  //if we don't find it, return false
  return false;
}

console.log(binarySearch(arr, 7));

module.exports = binarySearch;
