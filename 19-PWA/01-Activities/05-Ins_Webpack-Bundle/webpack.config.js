const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/js/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

module: {
  //we are setting up rules for webpack
  //rules will run a test -- we are using regex to patternmatch for files that match the .css ending
  rules: [
    {
      // $ means the .css will be at the end and /i means case insensitive
      test: /\.css$/i,
      //using these additional packages to bundle the css files into the bundle
      use: ['style-loader', 'css-loader'],
    },
  ],
},
};
