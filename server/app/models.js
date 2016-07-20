//link model
var db = require('../config');
var mongoose = require('mongoose');

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

module.exports = Recipe;
module.exports = Search;