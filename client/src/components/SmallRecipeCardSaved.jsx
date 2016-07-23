class SmallRecipeCardSaved extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      display: true
    }
  }

  displayFalse (){
    this.setState({
      display:false
    })
  }

  deleteRecipe(id){
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
    if (this.state.display) {
      return(
        <div className="recipe-card row">
          <div className="recipeImg col-md-5">
            <img className="center-block" src={this.props.recipe.image} />
          </div>
          <div className="recipeBody col-md-7">
            <div className="recipeTitle">{this.props.recipe.title}</div>
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
