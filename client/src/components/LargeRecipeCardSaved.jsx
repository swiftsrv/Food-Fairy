var LargeRecipeCardSaved = (props) => (
  <div>
    {/* props: recipe - the recipe to be shown */}
    {/* the backdrop that covers the rest of the page when the large recipe
      card is rendered */}
    <div className="recipe-card-large-backdrop"></div>
    {/* the actual large recipe card */}
    <div className="recipe-card-large">
      <div>
        <div className="recipeTitle text-center">{this.props.recipe.title}</div>
        <img className="recipeImg center-block" src={this.props.recipe.image} alt="" />
      </div>
      <div className="recipeBody">
        {/* react does not like html being added from unknown sources to its rendered
          pages. This is to protect from attacks. In our case, we're forcing it to
          accept html from the Ajax query to the API. This could likely be implemented
          in a different way */}
          <div dangerouslySetInnerHTML={{__html: this.props.recipe.summary}}></div>
          <ol>
            {/* loops through all the recipe steps and adds them to an ordered list */}
            {JSON.parse(this.props.recipe.steps).map((step)=>{ return (<li>{step.step}</li>)})}
          </ol>
          <div className="saveorlike">
            <div className="recipeLikes"><img src="imgs/likes.png" /> {this.props.recipe.likes}</div>
          </div>
        </div>
      </div>
    </div>

)

window.LargeRecipeCard = LargeRecipeCardSaved;
