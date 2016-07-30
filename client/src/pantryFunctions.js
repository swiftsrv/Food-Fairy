

var saveIngredient = function (ingredient, callback) {
  $.ajax({
    url: '/api/pantryList',
    method: 'POST',
    data: {
      "ingredient": ingredient
    },
    success: function success(data) {
      if (callback) {
        callback(data);
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
        callback(data);
      }
    },
    error: function error() {
      console.log("Failed to fetch pantry");
    },
  });
};

var removeIngredient = function(callback){
  $.ajax({
    url: '/api/pantryList',
    method: 'DELETE',
    success: function success(data) {
      if (callback) {
        console.log("Ingredient removed")
        callback(data);
      }
    },
    error: function error() {
      console.log("Failed to remove ingredient");
    },
  });
};

window.saveIngredient = saveIngredient;