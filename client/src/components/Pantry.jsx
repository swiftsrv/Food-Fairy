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
        <PantryList pantryList={this.props.pantryList} />
      </div>
    )
  }
}

window.Pantry = Pantry;