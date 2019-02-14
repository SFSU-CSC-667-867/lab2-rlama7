// jshint esverison: 6

const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

// get requeset
//app.get('/', (req, res) => res.send('<h1>Hello World!</h1>'));

// aboutme
app.get('/world', (req, res) => res.send('<h1>Hello World</h1>'));

// listen from express module
app.listen(port, () => console.log('app listening on port ${port}!...'));
