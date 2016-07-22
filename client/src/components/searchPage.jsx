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
      <div>
        <Header />
        <div className='searchpage'>
          <SearchBox searchAPI={this.props.searchAPI} callback={this.createRecipeList.bind(this)}/>
          <div className="recipe-list">
            <RecipeList recipeList={this.state.recipeList}/>
          </div>
        </div>
      </div>
    )
  }
}

window.SearchPage = SearchPage;
