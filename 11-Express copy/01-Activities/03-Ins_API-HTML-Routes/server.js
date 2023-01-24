const express = require('express');

const PORT = 3001;
const app = express();

app.get('/', (req, res) => {
  res.send(
    //we are sending a response of basic text back
    `<p>API - An application programming interface, is a computing interface that defines interactions between multiple software intermediaries</p>`
  );
});

app.get('/api', (req, res) => {
  //we can send a response as json object --- res.json() (instead of res.send) and put in {key:value pairs}
  res.json({
    term: 'api',
    description:
      'An application programming interface, is a computing interface that defines interactions between multiple software intermediaries',
  });
});

//set it up to listen for requests at that port
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
