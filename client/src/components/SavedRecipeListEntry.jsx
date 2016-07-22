class SavedRecipeListEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display:true
    }
  }
  displayFalse (){
    this.setState({
      display:false
    })
  }

  render(){
    if(this.state.display){
      return(
        <div className="saved-recipe-list-entry">
          <div>{this.props.recipe.title}</div>
          <img className="recipeImg" src={this.props.recipe.image} alt="" />
          <div>{this.props.recipe.likes}</div>
          <button className="deleteRecipeButton" onClick={()=>{this.props.deleteRecipe(this.props.recipe._id); this.displayFalse()}}>Delete Recipe</button>
        </div>
      )
    }else{
      return(<div></div>)
    }
  }
}
window.SavedRecipeListEntry = SavedRecipeListEntry;