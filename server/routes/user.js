var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();
// var requiresLogin = require('requiresLogin');

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('user', { user: req.user });
});

// app.get('/user',
//   requiresLogin,
//   function (req, res) {
//     res.render('user', {
//       user: req.user
//     });
//   });

module.exports = router;