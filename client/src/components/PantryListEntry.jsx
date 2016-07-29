class PantryListEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pressed: false
    };
  }

  toggleIngredient(ingredient, ingredientIndex){
    this.state.pressed = !this.state.pressed;
    if(this.state.pressed){
      this.props.addToSearchablePantryIngredients(ingredient)
    }else{
      this.props.removeFromSearchablePantryIngredients(ingredientIndex)
    }
  }

  render(){
    return(
      <li>
        <button onClick={()=> this.toggleIngredient(this.props.ingredient, this.props.ingredientIndex)}>{this.props.ingredient}</button>
        <button onClick={()=> "THIS BUTTON SHOULD REMOVE PANTRY INGREDIENTS FROM DATABASE"}>remove</button>
      </li>
    )
  }
}
//winter is coming
window.PantryListEntry = PantryListEntry;
