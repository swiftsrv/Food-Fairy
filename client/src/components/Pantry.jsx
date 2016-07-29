class Pantry extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return(
      <div>
        <h3>HI</h3>
        <PantryInput />
        <PantryList pantryList={this.props.pantryList}
                    searchAPI={this.props.searchAPI}
                    createRecipeList={this.props.createRecipeList.bind(this)} />
      </div>
    )
  }
}

window.Pantry = Pantry;