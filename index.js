var _ = require('underscore');
var lodash = require('lodash');
var chalk = require('chalk');
var express = require('express');
var bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

var movies = ["T2", "The land before time", "Scary Movie"];

app.get('/', (req, res) => {
    // 
});

app.get('/movies/:id', (req, res) => {
    // grab single moview
});

app.post('/movies/:name', (req, res) => {
    // add movie
});

app.delete('/movies/:name', (req, res) => {
    // delete movie
});

app.put('/movies/:id/edit', (req, res) => {
    // edit movie
})



app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})

