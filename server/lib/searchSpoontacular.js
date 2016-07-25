// API get request using the findByIngredients endpoint
var searchSpoontacular = function searchSpoontacular(options, callback) {
  $.ajax({
    // This is the url you should use to communicate
    // with the Spoontacular API server.
    url: 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients',
    method: 'GET',
    data: {
      fillIngredients: "true",
      ingredients: options["query"],
      limitLicense: "false",
      number: options["max"],
      ranking: "1",
      key: options["key"]
    },
    success: function success(data) {
      console.log(data);

      callback(data.source);

      console.log("Successfully completed GET request");
    },
    error: function error() {
      console.log("Failed to load data from Spoontacular");
    },
    //this is required or else the request will not be authorized
    beforeSend: function(xhr) {
      xhr.setRequestHeader("X-Mashape-Authorization", SPOONTACULAR_API_KEY);
    }
  });
};

window.searchSpoontacular = searchSpoontacular;