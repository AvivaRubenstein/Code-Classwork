const path = require('path');

module.exports = {
  //we are in development mode, as opposed to 'production' mode
  //dev mode has a lot of notes/info for us, production mode is how you'd want to actually deliver it live to the web
  //it takes our file and compresses it into one line for production
  mode: 'development',
  //entry point to our application is the index.js (which links to any other files we want)
  entry: './src/js/index.js',
  //when we build it, we want to output it into a new structure
  output: {
    filename: 'main.js',
    //will create a dist folder with a main.js file inside our current directory
    path: path.resolve(__dirname, 'dist'),
  },
};
