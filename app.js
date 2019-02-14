// jshint esverison: 6

const express = require('express');
const app = express();
const port = 3000;

// get requeset
app.get('/', (req, res) => res.send('<h1>Hello World! Happy Programming!!</h1>'));

// aboutme
app.get('/aboutme', (req, res) => res.send('<h1>About Me: I love programming!</h1>'));

// contactme
app.get('/contactme', (req, res) => res.send('<h1>Contact Me: contact me at: rlama7@mail.sfsu.edu</h1>'));

// listen from express module
app.listen(port, () => console.log('app listening on port ${port}!...'));
