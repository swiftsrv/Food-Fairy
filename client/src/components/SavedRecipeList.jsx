var SavedRecipeList = (props) => {
  return(
    <div className="saved-recipe-list">
      <SavedRecipeListEntry />
    </div>
  )
}

window.SavedRecipeList = SavedRecipeList;