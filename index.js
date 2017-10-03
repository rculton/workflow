var _ = require('underscore');
var lodash = require('lodash');
var chalk = require('chalk');
var express = require('express');
var bodyParser = require('body-parser');
const PORT = 3000;

const app = express();

var movies = ["T2", "The land before time", "Scary Movie"];

app.get('/', (req, res) => {
    res.send(movies)
});

app.get('/movies/:id', (req, res) => {
    res.send(movies[req.params['id']])
});

app.post('/movies/:name', (req, res) => {
    movies.push(req.params['name'])
    res.send(movies)
});

app.delete('/movies/:name', (req, res) => {
    movies.splice(movies.indexOf(req.params['name']),1)
    res.send(movies)
});

app.put('/movies/:id/edit', (req, res) => {
    movies[req.params['id']] = req.params['edit']
    res.send(movies)
})



app.listen(PORT, () => {
    console.log('Listening on port: ' + PORT)
})

