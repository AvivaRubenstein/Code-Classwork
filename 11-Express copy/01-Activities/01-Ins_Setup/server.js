const express = require('express');
//path helps us figure out where files are stored on our computer
const path = require('path');

const app = express();
//this is the standard port to use for express in dev environment
const PORT = 3001;

//app.use sets up some middleware
//this command makes it so everything inside public folder will be accessible from our server
  //we have 3 html files and we are serving them to the user, index.html automatically gets served first
  //our stylesheet is also in public
app.use(express.static('public'));

//app.get --- this is a get request
// single forward slash = homepage
//this line of code is actually unnecessary when we have the app.use(express.static('public')) line 
//bc that will automatically load the index.html from the public folder, but the other html pages do need this type of line
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

//when we get a request on /send we will return the sendFile.html file to the user
app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

//when we get a request on /routes we will return routes.html to user
app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

//to start express and get it to listen to incoming requests we do app.listen
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
