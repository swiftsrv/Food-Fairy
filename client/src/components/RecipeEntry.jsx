class RecipeEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      smallCard: true
    }
  }

  toggleCard (){
    this.setState({
      smallCard: !this.state.smallCard
    })
  }
  render(){
    return (
      <div className="recipe-list-entry" onClick={this.toggleCard.bind(this)}>
        {(()=>{
          if(this.state.smallCard){
            return <SmallRecipeCard recipe={this.props.recipe} />
          }else{
            return <LargeRecipeCard recipe={this.props.recipe} searchInstructions={window.searchInstructions} searchSummary={window.searchSummary} searchIngredients={window.searchIngredients}/>
          }
        })()} 
      </div>
    )
  }
}

window.RecipeEntry = RecipeEntry
