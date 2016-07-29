class PantryInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value: ''
    };
  }

  render(){
    return(
      <div className="pantryinputform">
        <input className="pantryinput" type="text" onChange={(event) => {
            this.setState({value: event.target.value});
        }} value={this.state.value}/>
        <button className="pantryinputsubmit" onClick={() => {}}>Save Ingredient</button>
      </div>
    )
  }
}

window.PantryInput = PantryInput;