class SmallRecipeCard extends React.Component {
  constructor(props){
    super(props);
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
  }

  render(){
    return(
      <div>
        <div>
          <img className="recipeImg" src={this.props.recipe.image} alt=""/>
        </div>
        <div className="recipeBody">
          <div className="recipeTitle" onClick={this.saveRecipe.bind(this)}>{this.props.recipe.title}</div>
          <div className="recipeLikes">{this.props.recipe.likes}</div>
        </div>
      </div>
    )
  }
}

window.SmallRecipeCard = SmallRecipeCard;
