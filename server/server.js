var express = require('express');
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var dotenv = require('dotenv');
var path = require('path');
var favicon = require('serve-favicon');
var mongoose = require('mongoose');
var passport = require('passport');
var Auth0Strategy = require('passport-auth0');

//load environment variables from .env into ENV in development
dotenv.load();

var routes = require('./routes/route');
var user = require('./routes/user');

// This will configure Passport to use Auth0
var strategy = require('./config/setup-passport');
passport.use(strategy);

// use this section to keep a smaller payload
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
// See express session docs for information on
// the options: https://github.com/expressjs/session
app.use(session({
  secret: 'grumpycat',
  resave: true,
  saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(__dirname + '/../client'));
app.use('/styles', express.static(__dirname + '/../client/style'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/server', express.static(__dirname));

app.use('/', routes);
app.use('/user', user);

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/index-homepage.html'));
  res.status(200);
});

app.get('/home', function (req, res) {
  res.redirect('/');
});

app.get('/search', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/index-searchpage.html'));
});

app.get('/saved', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/index-savedpage.html'));
});

app.get('/user', function (req, res) {
  res.render('user', {
    user: req.user
  });
});

// if (process.env.NODE_ENV === 'production') {
//   SPOONTACULAR_API_KEY = process.env.SPOONTACULAR_API_KEY;
// } else {
//   SPOONTACULAR_API_KEY = SPOONTACULAR_API_KEY;
// }

//connect to monglab for production or localhost for dev
mongoURI = 'mongodb://foodfairy:12345@ds023425.mlab.com:23425/heroku_xnp0xnxj' ||
           'mongodb://localhost:27017/HRR17-Jigglypuff';

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
  likes: Number,
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
  Recipe.find({}).exec(function(err, recipes){
    if(err){
      res.send(err);
    } else {
      console.log(recipes)
      res.json(recipes);
    }
  });
});


//add activity and send back all activities
app.post('/api/recipes', function(req, res){

  var inbound = req.body;
  var recipe = new Recipe({
    title: inbound.title,
    image: inbound.image,
    likes: inbound.likes
  });

  recipe.save(function(err, data){
    if(err){
      res.send(err);
    } else {
      Recipe.find(function(err, data) {
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
app.delete('/api/recipes/:recipe_id', function(req, res){
  Recipe.remove({ _id : req.params.recipe_id }, function(err, recipe){
    if(err){
      res.send(err);
    } else {
      Recipe.find(function(err, recipes){
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
  Search.remove({ _id : req.params.search_id }, function(err, search){
    if(err){
      res.send(err);
    } else {
      Search.find(function(err, searches){
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
