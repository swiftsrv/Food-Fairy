class LargeRecipeCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.recipe.id,
      steps: []
    }
  }

  componentWillMount(){

    //instructions
    this.props.searchInstructions(this.state.id, (recipes)=>{
      var concatRecipe = [];
      recipes.forEach(function(recipe){
        concatRecipe = concatRecipe.concat(recipe.steps);
      })
      this.setState({
        steps: concatRecipe
      })
    })

    //ingredients as future functionality? this can be obtained
    //from "Get Product Data" endpoint and searchIngredients has
    //already been added to the searchSpontacular.js with that endpoint

    //description/summary
    this.props.searchSummary(this.state.id, (data)=>{
      this.setState({ summary: JSON.stringify(data.summary) })
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
      <div className="recipe-card-large">
        <div>
          <img className="recipeImg" src={this.props.recipe.image} alt="" />
        </div>
        <div className="recipeBody">
          <div className="recipeTitle">{this.props.recipe.title}</div>
          <div className="recipeLikes">{this.props.recipe.likes}</div>
          <div dangerouslySetInnerHTML={{__html: this.state.summary}} />
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
