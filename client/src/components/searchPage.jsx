class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      recipeList: []
    }
  }

  createRecipeList(list) {
    this.setState({
      recipeList: list
    });
  }

  render(){
    return(
      <div className='searchpage'>
        <Header />
        <SearchBox searchAPI={this.props.searchAPI} callback={this.createRecipeList.bind(this)}/>
        <RecipeList recipeList={this.state.recipeList}/>
      </div>
    )
  }
}

window.SearchPage = SearchPage;