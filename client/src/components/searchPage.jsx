class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipeList: []
    }
  }

  componentWillMount() {
    this.setState({
      recipeList: this.props.searchRecipe
    });
  }

  render(){
    return(
      <div className='searchpage'>
        <Header />
        { console.log(this.props, ' from searchPage') }
        <SearchBox searchAPI={this.props.searchAPI}/>
        <SavedRecipeList />
        <RecipeList recipeList={this.state.recipeList}/>
      </div>
    )
  }
}

window.SearchPage = SearchPage;