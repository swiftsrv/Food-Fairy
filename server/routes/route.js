// Auth0 routes functionality
var express = require('express');
var passport = require('passport');
var router = express.Router();

// Auth0 environment profile. Stored in .env locally
// and Heroku environment variables
var env = {
  AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
  AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
  AUTH0_CALLBACK_URL: process.env.AUTH0_CALLBACK_URL || 'http://localhost:3000/callback'
};

// get home page. could be render to login page in future
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', env: env });
});

// render to login page when login button is clicked
router.get('/login',
  function(req, res){
    res.render('login', { env: env });
  });

// currently no logout link available
// Auth0 allows for logging out using 'Lock' widget
router.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

// this redirect upon failure or sucess this will
// need to be updated with redirect after login
router.get('/callback',
  passport.authenticate('auth0', { failureRedirect: process.env.AUTH0_CALLBACK_URL }),
  function(req, res) {
    res.redirect(req.session.returnTo || '/user');
  });


module.exports = router;