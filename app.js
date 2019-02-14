// jshint esverison: 6

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

// get requeset
app.get('/', (req, res) => res.send('<h1>Hello World! Happy Programming!!</h1>'));

// aboutme
app.get('/aboutme', (req, res) => {
  console.log(req.query);
  res.send('<h1>Hello:</h1> ' + req.query.name);
});

// network
app.get('/network', (req, res) => {
  axios.get('http://localhost:3001/world')
  .then((networkResponse) => {
    res.send(networkResponse.data);
  })
  .catch(() => {
    res.send(' :( did not work.');
  });
});

// contactme
app.get('/contactme', (req, res) => res.send('<h1>Contact Me: contact me at: rlama7@mail.sfsu.edu</h1>'));

// listen from express module
app.listen(port, () => console.log('app listening on port ${port}!...'));
