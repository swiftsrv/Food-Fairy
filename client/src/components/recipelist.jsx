var RecipeList = (props) => (
  <div className="recipe-list">
    {props.exampleRecipeData.map((recipe, index) => <RecipeEntry key={index} recipe={recipe}/>)}
  </div>
)

window.RecipeList = RecipeList;