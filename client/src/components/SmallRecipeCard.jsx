class SmallRecipeCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      id: this.props.recipe.id
    };
  }

  componentWillMount () {
    this.props.searchSummary(this.state.id, (data)=>{
      this.setState({ summary: JSON.stringify(data.summary) })
    })
  }

  render(){
    return(
      <div className="recipe-card row">
        <div className="recipeImg col-md-5">
          <img className="center-block" src={this.props.recipe.image} />
        </div>
        <div className="recipeBody col-md-7">
          <div className="recipeTitle">{this.props.recipe.title}</div>
          <div dangerouslySetInnerHTML={{__html: this.state.summary}} />
          <div className="recipeLikes"><img src="imgs/likes.png" /> {this.props.recipe.likes}</div>
        </div>
      </div>
    )
  }
}

window.SmallRecipeCard = SmallRecipeCard;
