var RecipeEntry = (props) => {
  return(
    <div className="recipe-list-entry">
      <div>
        <img className="recipeImg" src='https://spoonacular.com/recipeImages/Easy---Delish--Apple-Crumble-641803.jpg' alt="" />
      </div>
      <div className="recipeBody">
        <div className="recipeTitle">Some data</div>
        <div className="recipeLikes">Some data</div>
      </div>
    </div>
  )
}

window.RecipeEntry = RecipeEntry