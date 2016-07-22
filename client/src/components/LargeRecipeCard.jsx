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
      <div>
        <div className="recipe-card-large-backdrop"></div>
        <div className="recipe-card-large">
          <div>
            <div className="recipeTitle text-center">{this.props.recipe.title}</div>
            <img className="recipeImg center-block" src={this.props.recipe.image} alt="" />
          </div>
          <div className="recipeBody">
            <div dangerouslySetInnerHTML={{__html: this.state.summary}} />
            <ol>
              {this.state.steps.map((step)=>{ return (<li>{step.step}</li>)})}
            </ol>
            <div className="saveorlike">
              <button className='saveRecipeButton' onClick={this.saveRecipe.bind(this)}>Save Recipe</button>
              <div className="recipeLikes"><img src="imgs/likes.png" /> {this.props.recipe.likes}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

window.LargeRecipeCard = LargeRecipeCard;
