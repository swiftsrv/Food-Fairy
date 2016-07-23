class LargeRecipeCardSaved extends React.Component {
  constructor(props){
    super(props);
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
            <div dangerouslySetInnerHTML={{__html: this.props.recipe.summary}} />
            <ol>
              {JSON.parse(this.props.recipe.steps).map((step)=>{ return (<li>{step.step}</li>)})}
            </ol>
            <div className="saveorlike">
              <div className="recipeLikes"><img src="imgs/likes.png" /> {this.props.recipe.likes}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

window.LargeRecipeCard = LargeRecipeCardSaved;
