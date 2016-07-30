

var saveIngredient = function (ingredient, callback) {
  $.ajax({
    url: '/api/pantryList',
    method: 'POST',
    data: {
      "ingredient": ingredient
    },
    success: function success(data) {
      if (callback) {
        var ingredients = data.map(function(obj){
          return obj.ingredient;
        });
        callback(ingredients);;
      }
      console.log("Successfully completed Pantry post request");
    },
    error: function error() {
      console.log("Failed post ingredient");
    },
  });
};

var getIngredient = function(callback){

  $.ajax({
    url: '/api/pantryList',
    method: 'GET',
    success: function success(data) {
      if (callback) {
        console.log("Pantry loaded")
        var ingredients = data.map(function(obj){
          return obj.ingredient;
        });
        callback(ingredients);
      }
    },
    error: function error() {
      console.log("Failed to fetch pantry");
    },
  });
};

var removeIngredient = function(ingredient, callback){
  $.ajax({
    url: '/api/pantryList',
    method: 'DELETE',
    data: {
      "ingredient": ingredient
    },
    success: function success(data) {
      if (callback) {
        var ingredients = data.map(function(obj){
          return obj.ingredient;
        })
        callback(ingredients);
      }
    },
    error: function error() {
      console.log("Failed to remove ingredient");
    },
  });
};

window.saveIngredient = saveIngredient;
window.getIngredient = getIngredient;
window.removeIngredient = removeIngredient;