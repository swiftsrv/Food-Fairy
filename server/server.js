var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var path = require('path');
var mongoose = require('mongoose');

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

var SPOONTACULAR_API_KEY = SPOONTACULAR_API_KEY || process.env.SPOONTACULAR_API_KEY;

//connect to monglab for production or localhost for dev
mongoURI = 'mongodb://foodfairy:12345@ds023425.mlab.com:23425/heroku_xnp0xnxj' ||
           'mongodb://localhost/HRR17-Jigglypuff';

mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
 console.log('Mongodb connection open!');
});

var recipeSchema = mongoose.Schema({
  title: String,
  image: String,
  missedIngredients: String,
  usedIngredients: String
});

var searchSchema = mongoose.Schema({
  query: String
});

var Recipe = mongoose.model('Recipe', recipeSchema);
var Search = mongoose.model('Search', searchSchema);


//get all recipes from db
app.get('/api/recipes', function(req, res){
  db.Recipe.find({}).exec(function(err, recipes){
    if(err){
      res.send(err);
    } else {
      res.json(recipes);
    }
  });
});


//add activity and send back all activities
app.post('/api/recipes', function(req, res){

  var inbound = req.body;
  console.log('got to post', inbound);

  var recipe = new db.Recipe({
    title: inbound.title,
    image: inbound.image,
    missedIngredients: inbound.missedIngredients,
    usedIngredients: inbound.usedIngredients
  });

  recipe.save(function(err, data){
    if(err){
      res.send(err);
    } else {
      db.Recipe.find(function(err, data) {
        if(err){
          res.send(err);
        } else {
          res.json(data);
        }
      });
    }
  });
});


//remove recipe and send back all recipes
app.delete('/api/recipes/:recipe', function(req, res){
  db.Recipe.remove({ _id : req.params.recipe_id }, function(err, recipe){
    if(err){
      res.send(err);
    } else {
      db.Recipe.find(function(err, recipes){
        if(err){
          res.send(err);
        } else {
          res.json(recipes);
        }
      });
    }
  });
});


//get all recipes from db
app.get('/api/searches', function(req, res){
  Search.find({}).exec(function(err, recipes){
    if(err){
      res.send(err);
    } else {
      res.json(recipes);
    }
  });
});


//add search and send back all searches
app.post('/api/searches', function(req, res){

  var inbound = req.body;
  console.log('got to post', inbound);

  var search = new Search({
    query: inbound.query
  });

  search.save(function(err, data){
    if(err){
      res.send(err);
    } else {
      Search.find(function(err, data) {
        if(err){
          res.send(err);
        } else {
          res.json(data);
        }
      });
    }
  });
});


//remove search and send back all search
app.delete('/api/searches/:search', function(req, res){
  db.Search.remove({ _id : req.params.search_id }, function(err, search){
    if(err){
      res.send(err);
    } else {
      db.Search.find(function(err, searches){
        if(err){
          res.send(err);
        } else {
          res.json(searches);
        }
      });
    }
  });
});

module.exports = app;