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
var mailer = require('express-mailer');
var EmailTemplate = require('email-templates').EmailTemplate;


// load environment variables from .env. good place for keys.
// our api key wouldn't work here for some reason
dotenv.load();

//Auth0 routes per set up instructions
var routes = require('./routes/route');
var user = require('./routes/user');

// this will configure Passport to use Auth0
var strategy = require('./config/setup-passport');
passport.use(strategy);

// Auth0's use of Passport to determine user
// object that should be stored in the session
passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});

var app = express();
var email = new EmailTemplate(__dirname + '/views');
// Auth0 view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());

// Auth0 express session docs for information on
// the options: https://github.com/expressjs/session
app.use(session({
  secret: 'grumpycat',
  resave: true,
  saveUninitialized: true
}));

// Auth0 middleware required to initialize Passport
// and retain persistent login sessions
app.use(passport.initialize());
app.use(passport.session());

//middleware pointers to static file directories
app.use(express.static(__dirname + '/../client'));
app.use('/styles', express.static(__dirname + '/../client/style'));
app.use('/node_modules', express.static(__dirname + '/../node_modules'));
app.use('/server', express.static(__dirname));

//Auth0 routes
app.use('/', routes);
app.use('/user', user);



// express error handlers
// development error handler will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// express error handlers
// production error handler no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/index.html'));
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

//DATABASE
/*************************************************************************************/
/*************************************************************************************/

//connect to monglab for production or localhost for dev
/******************************************/
mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/HRR17-Jigglypuff';

mongoose.connect(mongoURI);

// Run in seperate terminal window using 'mongod'
var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () {
 console.log('Mongodb connection open!');
});
/*****************************************/


var recipeSchema = mongoose.Schema({
  title: String,
  image: String,
  likes: Number,
  summary: String,
  steps: String,
  missedIngredients: String,
  usedIngredients: String
});

var searchSchema = mongoose.Schema({
  query: String
});

var pantrySchema = mongoose.Schema({
  ingredient: String
});

// models for mongo database
var Recipe = mongoose.model('Recipe', recipeSchema);
var Search = mongoose.model('Search', searchSchema);
var Pantry = mongoose.model('Pantry', pantrySchema);
/**************************************************************************************/
/**************************************************************************************/

//pantry api calls
/*****************************************************/

app.get('/api/pantryList', function(req, res){
  Pantry.find({})
    .exec(function(err, result){
      console.log(result);
      if(err)throw err;
      res.status(200).send(result);
    });
});
//Post might not work
app.post('/api/pantryList', function(req, res){
  var ingredient = new Pantry({ingredient: req.body.ingredient});

  ingredient.save(function (err, result) {
    if (err) throw err;
    Pantry.find({})
      .exec(function (err, ingredients){
        res.status(201).send(ingredients);
      });
  });
});
//DELETE FUNCTION
app.delete('/api/pantryList', function(req, res){
  Pantry.remove({ingredient: req.body.ingredient})
    .exec(function(err, result){
      if(err) throw err;
      Pantry.find({})
        .exec(function (err, ingredients){
          res.status(200).send(ingredients);
        });
    })

});
/*****************************************************/

// reteive all recipes from db
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

// add recipes to mongo database and retrieve all recipes
app.post('/api/recipes', function(req, res){

  var inbound = req.body;
  var recipe = new Recipe({
    title: inbound.title,
    image: inbound.image,
    likes: inbound.likes,
    summary: inbound.summary,
    steps: inbound.steps
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


// get all searches from db
// currently not being used
app.get('/api/searches', function(req, res){
  Search.find({}).exec(function(err, recipes){
    if(err){
      res.send(err);
    } else {
      res.json(recipes);
    }
  });
});


// add search and send back all searches
// currently not being used
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


// remove search and send back all search
// currently not being used
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


mailer.extend(app, {
  from: 'sqrtlhrr17@gmail.com',
  host: 'smtp.gmail.com', // hostname
  secureConnection: true, // use SSL
  port: 465, // port for secure SMTP
  transportMethod: 'SMTP', // default is SMTP. Accepts anything that nodemailer accepts
  auth: {
    user: 'sqrtlhrr17@gmail.com',
    pass: 'sqrtlsqrtl'
  }
});

//send an email of recipe
app.post('/api/email', function(req, res){
   var list = JSON.parse(req.body.groceries);
   var listString = "Don't Forget to Pick Up: ";
   console.log("list is ", list);
   list.forEach(function(item){
      listString += '\n' + item;
   })
   listString += '\n' + '-Your friends at Foraje';
   console.log("listString is ", listString);
   app.mailer.send('email', {
    to: 'sqrtlhrr17@gmail.com', // REQUIRED. This can be a comma delimited string just like a normal email to field.
    subject: 'Grocery List from Foraje', // REQUIRED.
    text: listString
  }, function (err) {
    if (err) {
      // handle error
      console.log(err);
      res.send('There was an error sending the email');
      return;
    }
    res.send('Email Sent');
  });
});

module.exports = app;
