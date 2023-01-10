//you cant write to a file system from your browser --- that would allow hackers to steal your files by going to your site
//node is server side, it's running on our machine, so we can do stuff that we couldnt do in the browser
//such as access our own file systems

//the data.csv file is like an excel sheet with different values separated by commas (comma separated vector)
//we are going to read from that file and display it into the terminal

//here, we open up the file system using the fs tool
//require is syntax which has us bring the fs package in, which by default tools aren't added automatically ---we import this standard library by saying require and specify which library we are requiring
//we set up a constant called fs which is set to the file system, but we could call it something else
// fs is a Node standard library package for reading and writing files
const fs = require('fs');

// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format / characters
//readFile takes 3 arguments:
  //the file we want to read
  //specify which format we are using to read the file
  //an arrow function
//the function will handle the info node's standard library will pass to us
//node will send us if there's any errors, and if there's any data
//if there are errors - we woulld console log them out
//if not, we simply console log out the data
  //we can obviously manipulate that data however we want, append stuff to it etc same as we would with regular js

fs.readFile('data.csv', 'utf8', (error, data) =>
  error ? console.error(error) : console.log(data)
);

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

//we can also write anything we want to files
//here we are trying to write something to log.txt file which doesn't exist
//this will generate this file, and put whatever the string was into the file
//if you do it multiple times, it will overwrite any existing text to it
//we can experiment with appending to a file instead instead of writing over it 
fs.writeFile('log.txt', process.argv[2], (err) =>
  err ? console.error(err) : console.log('Success!')
);
