//API key needs to be removed from here and placed into an env file on the domain (heroku)
window.SPOONTACULAR_API_KEY = 'R6un6vpSqfmshTqGWty9ffZySRO0p1QAKU4jsn5Zy79FEs8QMm';

//searchs the recipes from the API using a user query and a callback to access
//  the recipes, will return up to 10 results
var searchSpoontacular = function({query, max = 10}, callback) {
  $.ajax({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
    method: 'GET',
    data: {
      fillIngredients: "true",
      ingredients: query,
      limitLicense: "false",
      number: max,
      ranking: "1"
    },
    success: function success(data) {

      if (callback) {
        callback(data);
      }
      console.log("data is ", data);
      console.log("Successfully completed GET request");
    },
    error: function error() {
      console.log("Failed to load data from Spoontacular");
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", SPOONTACULAR_API_KEY);
    }
  });
};

//searches for the recipe instructions/steps using the recipe's id
var searchInstructions = function(id, callback) {
  $.ajax({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id +'/analyzedInstructions',
    method: 'GET',
    data: {
      id:id,
      stepBreakdown: "true"
    },
    success: function success(data) {
      if (callback) { callback(data); }
      console.log("Successfully completed GET request");
    },
    error: function error() {
      console.log("Failed to load data from Spoontacular");
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", SPOONTACULAR_API_KEY);
    }
  });
};

//searches for the recipe summary using the recipe's id
var searchSummary = function(id, callback) {
  $.ajax({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id +'/summary',
    method: 'GET',
    data: {
      id: id
    },
    success: function success(data) {
      if (callback) { callback(data); }
      console.log("Successfully completed GET request");
    },
    error: function error() {
      console.log("Failed to load data from Spoontacular");
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", SPOONTACULAR_API_KEY);
    }
  });
};

//NOT YET IMPLEMENTED
//searches for the recipe ingredients using the recipe's id
//should be very simply to add
var searchIngredients = function(id, callback) {
  $.ajax({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id +'/information?includeNutrition=false',
    method: 'GET',
    data: {
      id: id
    },
    success: function success(data) {
      if (callback) { callback(data); }
      console.log("ingrdient data ", data);
      console.log("Successfully completed GET request");
    },
    error: function error() {
      console.log("Failed to load data from Spoontacular");
    },
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", SPOONTACULAR_API_KEY);
    }
  });
};

window.searchSpoontacular = searchSpoontacular;
window.searchInstructions = searchInstructions;
window.searchSummary      = searchSummary;
window.searchIngredients  = searchIngredients;
