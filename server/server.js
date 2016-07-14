var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));

app.get('/', function (req, res) {
  res.type('text/html');
  res.status(200);
  res.sendFile('index.html');
});

module.exports = app;