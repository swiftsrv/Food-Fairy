class PantryListEntry extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      pressed: false
    };
  }

  renderButton(){
    this.setState({
      pressed: this.state.pressed
    });
    this.render();
  }

  toggleIngredient(ingredient){
    this.state.pressed = !this.state.pressed;
    if(this.state.pressed){
      this.props.addToSearchablePantryIngredients(ingredient);
    }else{
      this.props.removeFromSearchablePantryIngredients(ingredient);
    }
    this.renderButton();

  }

  render(){
    return(
      <li>
      { this.state.pressed ?
           <button className='btn btn-default ingredientSelect' data-toggle="button" onClick={()=> this.toggleIngredient(this.props.ingredient)}>{this.props.ingredient}</button> :
           <button className='btn btn-default' data-toggle="button" onClick={()=> this.toggleIngredient(this.props.ingredient)}>{this.props.ingredient}</button>
      }


        <button className='btn btn-default' onClick={()=> {
          this.props.removeFromSearchablePantryIngredients(this.props.ingredient);
          this.props.removeIngredient(this.props.ingredient, this.props.updatePantryList);
        }}>remove</button>
      </li>
    )
  }
}
//winter is coming
window.PantryListEntry = PantryListEntry;
