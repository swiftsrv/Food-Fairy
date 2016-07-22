var RecipeList = (props) => (
  <div>
    {props.recipeList.map((recipe, index) => <RecipeEntry key={index} recipe={recipe}/>)}
  </div>
)

window.RecipeList = RecipeList;
