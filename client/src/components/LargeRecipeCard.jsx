class LargeRecipeCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.recipe.id,
      steps: []
    }
  }

  componentWillMount(){
    this.props.searchInstructions(this.state.id,(recipes)=>{
      var concatRecipe = [];
      recipes.forEach(function(recipe){
        concatRecipe = concatRecipe.concat(recipe.steps);
      })
      this.setState({
        steps: concatRecipe
      })
    })
  }

  render(){
    return(
      <div>
        <div>
          <img className="recipeImg" src={this.props.recipe.image} alt="" />
        </div>
        <div className="recipeBody">
          <div className="recipeTitle">{this.props.recipe.title}</div>
          <div className="recipeLikes">{this.props.recipe.likes}</div>
          <ol>
          {this.state.steps.map((step)=>{ return (<li>{step.step}</li>)})}
          </ol>
        </div>
      </div>
    )
  }
}

window.LargeRecipeCard = LargeRecipeCard;