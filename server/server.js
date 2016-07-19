var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/server', express.static(__dirname));

app.get('/', function (req, res) {
  res.status(200);
});

app.get('/home', function (req, res) {
  res.redirect('/');
});

app.get('/search', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/index-searchpage.html'));
});

app.get('/search', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/index-searchpage.html'));
});

app.get('/saved', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/index-savedpage.html'));
});

module.exports = app;