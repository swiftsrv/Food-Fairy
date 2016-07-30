class PantryList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchablePantryIngredients: []
    };
  }

  addToSearchablePantryIngredients(ingredient){
    this.state.searchablePantryIngredients.push(ingredient);
  }

  removeFromSearchablePantryIngredients (ingredientindex) {
    this.state.searchablePantryIngredients.splice(ingredientIndex, 1);
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
                                   addToSearchablePantryIngredients={this.addToSearchablePantryItems}
                                   removeFromSearchablePantryIndgredients={this.removeFromSearchablePantryItems}/>
              )
            })
          }
        </ul>
        <button className="pantryinputsubmit" onClick={() => {}}>Search with Pantry Ingredients</button>
      </div>
    )
  }
}

window.PantryList = PantryList;