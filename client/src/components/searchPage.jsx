class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipeList: []
    }
  }

  createRecipeList(list) {
    // console.log(list);
    this.setState({
      recipeList: list
    });
  }

  // componentWillMount() {
  //   this.setState({
  //     recipeList: this.props.searchRecipe
  //   });
  // }

  render(){
    return(
      <div className='searchpage'>
        <Header />
        <SearchBox searchAPI={this.props.searchAPI} callback={this.createRecipeList.bind(this)}/>
        <SavedRecipeList />
        <RecipeList recipeList={this.state.recipeList}/>
      </div>
    )
  }
}

window.SearchPage = SearchPage;