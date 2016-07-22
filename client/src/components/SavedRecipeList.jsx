class SavedRecipeList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      savedRecipes:[]
    }
  }
  componentWillMount(){
    $.ajax({
      url: '/api/recipes',
      type: 'GET',
      success: (data) => {
        this.setState({savedRecipes: data});
      },
      error: () => {
        console.log('failure')
      }
    });
  }
  deleteRecipe(id){
    $.ajax({
      url: '/api/recipes/'+id,
      type: 'delete',
      success: (data) => {
        console.log('delete success')
      },
      error: () => {
        console.log('failure')
      }
    })
  }

  render(){
    return(
      <div>
        <Header />
        <div className="saved-recipe-list">
          {this.state.savedRecipes.map((recipe)=>{return (<SavedRecipeListEntry recipe={recipe} deleteRecipe={this.deleteRecipe}/>)})}
        </div>
      </div>
    )
  }
}
window.SavedRecipeList = SavedRecipeList;
