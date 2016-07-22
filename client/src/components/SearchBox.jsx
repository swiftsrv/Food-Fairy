class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
  }

  searchAPI() {
    this.props.searchAPI({query: this.state.value}, (recipes) => {
      this.props.callback(recipes);
    });
  }

  render(){
    return(
      <div className="center-block searchbox">
        <input className="searchboxinput" type="text" onChange={(event) => {
          this.setState({value: event.target.value});
        }} value={this.state.value}/>
        <button className="submitButton searchsubmit" onClick={() => {this.searchAPI()}}>Search</button>
      </div>
    )
  }
}

window.SearchBox = SearchBox;
