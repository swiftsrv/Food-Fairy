class PantryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchablePantryIngredients: []
    };
  }

  addToSearchablePantryIngredients(ingredient){
    console.log(ingredient);
    this.state.searchablePantryIngredients.push(ingredient);
    console.log(this.state.searchablePantryIngredients);
  }

  removeFromSearchablePantryIngredients (ingredient) {
    var ingredientIndex = this.state.searchablePantryIngredients.indexOf(ingredient)
    if(ingredientIndex !== -1){
      this.state.searchablePantryIngredients.splice(ingredientIndex, 1);
    }
    console.log(this.state.searchablePantryIngredients);
  }

  searchAPIwithSearchablePantryIngredients () {
    this.props.searchAPI({query: this.state.searchablePantryIngredients.join(", ")}, (recipes) => {
      // callback gives access to the result of the searchAPI query
      this.props.createRecipeList(recipes);
    });
  }

  render(){
    return(
      <div>
        <ul>
          {
            this.props.pantryList.map((ingredient, ingredientIndex) =>{
              return(
                  <PantryListEntry ingredientIndex={ingredientIndex}
                                   ingredient={ingredient}
                                   addToSearchablePantryIngredients={this.addToSearchablePantryIngredients.bind(this)}
                                   removeFromSearchablePantryIngredients={this.removeFromSearchablePantryIngredients.bind(this)}
                                   updatePantryList={this.props.updatePantryList}
                                   removeIngredient={this.props.removeIngredient}/>
              )
            })
          }
        </ul>
        <button className="pantryinputsubmit" onClick={() => this.searchAPIwithSearchablePantryIngredients()}>Search with Pantry Ingredients</button>
      </div>
    )
  }
}

window.PantryList = PantryList;