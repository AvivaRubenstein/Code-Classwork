const moviePatrons = [
  { name: "Tom", age: 16 },
  { name: "Ashley", age: 31 },
  { name: "Sarah", age: 18 },
  { name: "Alvin", age: 22 },
  { name: "Cherie", age: 14 },
  { name: "Malcolm", age: 15 }
];

// 1.

// forEach is a functional way of iterating through an array without a for-loop
//with single parameter don't need ()s. and with one line don't need to write return
//for each oject in the array, we name it patron and log out the age
moviePatrons.forEach(patron => console.log(patron.age));

// 2.

// Filter returns a new array containing only elements whose callback returns a truthy value
//we can go through and execute a conditional, and only the items in the array that pass the conditional check will be returned
//filter will go through each patron, and do a conditional check to see if they are older than 17, the item will be returned to the variable we are assigning stuff to
//so the const canWatchRatedR will now be an array consisting of the 3 patrons who are old enough to watch R rated movies
//the others will not go into the new array
//filter is a great way to filter our data based on a conditional criteria

const canWatchRatedR = moviePatrons.filter(function(patron) {
  return patron.age > 17;
});

console.log(canWatchRatedR);

// 3.

// Map returns a brand new array the same length as the first. Each element is passed into the callback.
// Whatever is returned from the callback at each iteration is what goes into that index of the new array

const cardedMoviePatrons = moviePatrons.map(patron => {
  // Copy the object being iterated over
  //... spread syntax , making a copy of each of the objects so that when we modify it we aren't changing the original, just what's in our current list
  const pObj = { ...patron };
  // Do everything else the same
  if (pObj.age >= 17) {
    //adding a property to the object to say whether they can or cannot watch R rated movies
    //the orig array will not be changed bc we copied them, but the cardedMoviePatrons array will have these new properties
    pObj.canWatchRatedR = true;
  } else {
    pObj.canWatchRatedR = false;
  }
  // Be sure to return the new obj, not the parameter
  return pObj;
});

console.log("Movie Patrons: ")
console.log(moviePatrons);

console.log("\nCarded Movie Patrons: ");
console.log(cardedMoviePatrons);
