class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
  }

  searchAPI() {
    console.log(this, this.props);
    this.props.searchAPI({query: this.state.value}, (recipes) => {
      console.log(recipes);
    });
  }

  render(){
    return(
      <div>
        <input className="searchbox" type="text" onChange={(event) => {
          this.setState({value: event.target.value});
        }} value={this.state.value}/>
        <button className="submitButton" onClick={() => {this.searchAPI()}}>Search</button>
      </div>
    )
  }
}

window.SearchBox = SearchBox;

