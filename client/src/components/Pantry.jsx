class Pantry extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      pantryList: ["eggs", "duck"]
    };
  }

  updatePantryList(newList){
    this.setState({pantryList: newList});
    this.render();
  }

  getIngredientforInitialState () {

  }

  componentWillMount(){
    this.props.getIngredient(function(ingredientList){
      this.setState({pantryList: ingredientList});
    }.bind(this));
  }




  render(){
    return(
      <div>
        <h3>Pantry</h3>
        <PantryInput saveIngredient={this.props.saveIngredient} updatePantryList={this.updatePantryList.bind(this)}/>
        <PantryList pantryList={this.state.pantryList}
                    searchAPI={this.props.searchAPI}
                    createRecipeList={this.props.createRecipeList.bind(this)}
                    removeIngredient={this.props.removeIngredient}
                    updatePantryList={this.updatePantryList.bind(this)} />
      </div>
    )
  }
}

window.Pantry = Pantry;