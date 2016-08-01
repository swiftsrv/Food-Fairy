// SearchPage renders the SearchBox and RecipeList components
class SearchPage extends React.Component {
  // props saves the data that returns in the searchAPI query
  // searchAPI method is called on the searchBox component
  constructor(props){
    super(props);
    this.state={
      recipeList: [],
      pantry: false
    }
  }

  //used as a callback passed to the searchbox - it gets access to the recipe from
  //  inside the searchbox component
  createRecipeList(list) {
    this.setState({
      recipeList: list
    });
  }


  togglePantry(){
    console.log("pantry click");
    this.setState({
      pantry: !this.state.pantry
    });
  }


  render(){
    return(
      <div>
        <Header />
        <div className='searchpage'>
          {/* passing callback to the searchAPI component to access the result of the searchAPI query */}
          <SearchBox searchAPI={this.props.searchAPI} callback={this.createRecipeList.bind(this)}/>
           <button type="button" onClick={this.togglePantry.bind(this)}>
            Pantry
           </button>


            <div className="sidebar-offcanvas" role="navigation">
            {this.state.pantry ?
            <Pantry createRecipeList={this.createRecipeList.bind(this)}
                    searchAPI={this.props.searchAPI}
                    saveIngredient={this.props.saveIngredient}
                    getIngredient={this.props.getIngredient}
                    removeIngredient={this.props.removeIngredient} />
            : null }

            </div>


          <div>
          <div className="recipe-card row text-right">
            <div className="recipeImg col-md-1"></div>
            <RecipeList recipeList={this.state.recipeList}/>
            <div className="recipeImg col-md-1"> </div>
          </div>
          </div>

        </div>
      </div>
    )
  }
}

window.SearchPage = SearchPage;
