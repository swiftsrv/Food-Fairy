class SmallRecipeCard extends React.Component {
  constructor(props){
    super(props);
    this.state = { saved: false };
  }

  saveRecipe(){
    //save favorite recipe
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


    $.ajax({
      url: '/api/recipes',
      type: 'GET',
      success: function(data) {
        console.log('success' + JSON.stringify(data))
      }.bind(this),
      error: function() {
        console.log('failure')
      }
    });

    this.setState({ saved: true });
    this.savedTimeout = setTimeout(function() {
      this.setState({ saved: false });
    }.bind(this), 2000)
  }

  componentWillUnmount () {
    this.savedTimeout && clearTimeout(this.savedTimeout);
    this.savedTimeout = false;
  }

  render(){
    return(
      <div className="recipe-card row">
        <div className="recipeImg col-md-5">
          <img className="center-block" src={this.props.recipe.image} />
        </div>
        <div className="recipeBody col-md-7">
          <div className="recipeTitle" onClick={this.saveRecipe.bind(this)}>{this.props.recipe.title}</div>
          <div className="recipeLikes"><img src="imgs/likes.png" /> {this.props.recipe.likes}</div>
          <div className="saved">{this.state.saved ? "Saved!" : null}</div>
        </div>
      </div>
    )
  }
}

window.SmallRecipeCard = SmallRecipeCard;
