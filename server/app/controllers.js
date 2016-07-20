var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var models = require('./models.js');
var db = require('./database.js');
var app = require('../server.js');

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


//add search and send back all searches
app.post('/api/searches', function(req, res){

  var inbound = req.body;
  console.log('got to post', inbound);

  var search = new db.Search({
    query: inbound.query
  });

  search.save(function(err, data){
    if(err){
      res.send(err);
    } else {
      db.Search.find(function(err, data) {
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