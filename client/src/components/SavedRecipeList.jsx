// SavedRecipeList renders the cards retrieved from the database (saved recipes from the searchPage)
class SavedRecipeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      savedRecipes:[],
      smallCard: true
    }
  }

  //a function that triggers on click - it toggles between the small and large recipe cards
  toggleCard (){
    this.setState({
      smallCard: !this.state.smallCard
    })
  }

  //runs when component is rendered (react calls this function before rendering)
  componentWillMount(){
    // ajax request to get the recipes data from the db
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
          {/* iterate over all recipes received from the db request */}
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
