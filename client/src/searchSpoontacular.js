window.SPOONTACULAR_API_KEY = 'R6un6vpSqfmshTqGWty9ffZySRO0p1QAKU4jsn5Zy79FEs8QMm';

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

var searchInstructions = function(id, callback) {
  $.ajax({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id +'/analyzedInstructions',
    method: 'GET',
    data: {
      id:id,
      stepBreakdown: "true"
    },
    success: function success(data) {
      console.log(data);
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

var searchIngredients = function(id, callback) {
  $.ajax({
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/' + id +'/information?includeNutrition=false',
    method: 'GET',
    data: {
      id: id
    },
    success: function success(data) {
      console.log(data);
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

window.searchSpoontacular = searchSpoontacular;
window.searchInstructions = searchInstructions;
window.searchSummary      = searchSummary;
window.searchIngredients  = searchIngredients;


