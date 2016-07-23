class SavedRecipeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      savedRecipes:[],
      smallCard: true
    }
  }

  toggleCard (){
    this.setState({
      smallCard: !this.state.smallCard
    })
  }

  componentWillMount(){
    $.ajax({
      url: '/api/recipes',
      type: 'GET',
      success: (data) => {
        console.log('success');
        this.setState({savedRecipes: data});
      },
      error: () => {
        console.log('failure')
      }
    });
  }

  render(){
    return(
      <div>
        <Header />
        <div className="recipe-list pad-top" onClick={this.toggleCard.bind(this)}>
          {this.state.savedRecipes.map((recipe)=>{
            if(this.state.smallCard){
              return <SmallRecipeCardSaved key={recipe._id} recipe={recipe} deleteRecipe={this.deleteRecipe} />
            }else{
              return <LargeRecipeCardSaved key={recipe._id} recipe={recipe} deleteRecipe={this.deleteRecipe} />
            }
          })}
        </div>
      </div>
    )
  }
}
window.SavedRecipeList = SavedRecipeList;
