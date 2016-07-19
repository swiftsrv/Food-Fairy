var searchSpoontacular = function searchSpoontacular(options, callback) {

  // Options -> fillIndredients, ingredients, limitLicense, number, ranking
  // Callback is invoked on the array that we receive from the GET
  // See below for more details on how to use API

  // Find By Ingredients - Find recipes that use as many of the given ingredients as
  // possible and have as little as possible missing ingredients. This is a whats
  // in your fridge API endpoint.
  $.ajax({
    // This is the url you should use to communicate
    //with the Spoontacular API server.
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

      callback(data.items);

      console.log("Successfully completed GET request");
    },
    error: function error() {
      console.log("Failed to load data from Spoontacular");
    }
  });
};

window.searchSpoontacular = searchSpoontacular;


//////////  API DOCUMENTATION //////////
// For more info or the many other types of endpoints and potential requests go here:
//https://market.mashape.com/spoonacular/recipe-food-nutrition

//URL OPTIONS/PARAMETERS
//fillIngredients - Boolean - Add information about the used and missing ingredients in each recipe.
//ingredients     - String  - A comma-separated list of ingredients that the recipes should contain.
//limitLicense    - Boolean - Whether to only show recipes with an attribution license.
//number          - Number  - The maximal number of recipes to return (default = 5).
//ranking         - Number  - Whether to maximize used ingredients (1) or minimize missing ingredients (2) first.

// URL ENDPOINT
// https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients

// REQUEST EXAMPLE USES WEIRD REST AJAX REQUEST
// unirest.get("https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/findByIngredients?fillIngredients=false&ingredients=apples%2Cflour%2Csugar&limitLicense=false&number=5&ranking=1")
// .header("X-Mashape-Key", "EBBg4vbZMzmshE33pta1ytNGfIizp1oF17jjsn6xHgCseYNA7T")
// .header("Accept", "application/json")
// .end(function (result) {
//   console.log(result.status, result.headers, result.body);
// });

//RESPONSE HEADERS
// Access-Control-Allow-Headers: *
// Access-Control-Allow-Methods: : GET, HEAD, POST, OPTIONS, DELETE, PUT
// Allow-Control-Allow-Methods: : GET, HEAD, POST, OPTIONS, DELETE, PUT
// Allow-Control-Allow-Origin: *
// Connection: keep-alive
// Content-Encoding: gzip
// Content-Length: 346
// Content-Type: application/json
// Date: Sun, 11 Oct 2015 18:47:11 GMT
// Server: Mashape/5.0.6

// EXAMPLE DATA
// Example data and options used in the GET request are located in data/exampleFoodData.js.
