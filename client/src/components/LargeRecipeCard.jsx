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

  saveRecipe(){
    $.ajax({
      url: '/api/recipes',
      type: 'POST',
      data: { title: this.props.recipe.title,
              image: this.props.recipe.image,
              likes: this.props.recipe.likes },
      success: function(data) {
        console.log('success')
      }.bind(this),
      error: function() {
        console.log('failure')
      }
    });
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
          <button className='saveRecipeButton' onClick={this.saveRecipe.bind(this)}>Save Recipe</button>
        </div>
      </div>
    )
  }
}

window.LargeRecipeCard = LargeRecipeCard;