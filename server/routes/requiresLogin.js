//Auth0 function to check if user is logged in
module.exports = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}