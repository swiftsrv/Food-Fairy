var RecipeEntry = (props) => {
  return(
    <div className="recipe-list-entry">
      { console.log( props.recipe ) }
      <div>
        <img className="recipeImg" src={props.recipe.image} alt="" />
      </div>
      <div className="recipeBody">
        <div className="recipeTitle">{props.recipe.title}</div>
        <div className="recipeLikes">{props.recipe.likes}</div>
      </div>
    </div>
  )
}

window.RecipeEntry = RecipeEntry