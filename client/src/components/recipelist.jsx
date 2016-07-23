// RecipeList is called from the searchPage and receives it's props (RecipeList array) from the searchPage
//props: RecipeList - array of recipes received from the searchPage component
var RecipeList = (props) => (
  <div>
    {/* loops through all the recipes on it's props RecipeList (array) to pass them to
      the next component - RecipeEntry */}
    {props.recipeList.map((recipe, index) => <RecipeEntry key={index} recipe={recipe}/>)}
  </div>
)

window.RecipeList = RecipeList;
