class SmallRecipeCardSaved extends React.Component {
  //props: recipe - the recipe to be shown
  constructor(props){
    super(props);
    this.state = {
      display: true
    }
  }

  //function used to remove recipe card from page once it's been deleted
  displayFalse (){
    this.setState({
      display:false
    })
  }

  deleteRecipe(id){
    // ajax request that uses the recipe id to delete the data from the db
    // and the display state is set to false
    $.ajax({
      url: '/api/recipes/'+id,
      type: 'delete',
      success: (data) => {
        console.log('delete success')
        this.displayFalse();
      },
      error: () => {
        console.log('failure')
      }
    })

  }

  render(){
    // when the delete recipe button is clicked, the deleteRecipe method is called
    // deleteRecipe not only delete the data in the db, but also set the display state to false
    // this will remove that card without rendering the whole page again
    if (this.state.display) {
      return(
        <div className="recipe-card row">
          <div className="recipeImg col-md-5">
            <img className="center-block" src={this.props.recipe.image} />
          </div>
          <div className="recipeBody col-md-7">
            <div className="recipeTitle">{this.props.recipe.title}</div>
            {/* react does not like html being added from unknown sources to its rendered
            pages. This is to protect from attacks. In our case, we're forcing it to
            accept html from the Ajax query to the API. This could likely be implemented
            in a different way */}
            <div dangerouslySetInnerHTML={{__html: this.props.recipe.summary}} />
            <div className="saveorlike">
              <button className='deleteRecipeButton' onClick={(e)=>{e.stopPropagation(); this.deleteRecipe(this.props.recipe._id)}}>Delete Recipe</button>
              <div className="recipeLikes"><img src="imgs/likes.png" /> {this.props.recipe.likes}</div>
            </div>
          </div>
        </div>
      )
    } else {
      return(<div></div>)
    }
  }
}

window.SmallRecipeCard = SmallRecipeCardSaved;
