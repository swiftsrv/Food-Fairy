// SearchBox is rendered on SearchPage and receives searchAPI and callback as props
class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
  }

  searchAPI() {
    this.props.searchAPI({query: this.state.value}, (recipes) => {
      // callback gives access to the result of the searchAPI query
      this.props.callback(recipes);
    });
  }

  render(){
    return(
      <div className="center-block searchbox">
        {/* event set the state of the SearchBox to the data input */}
        <input className="searchboxinput" type="text" onChange={(event) => {
          this.setState({value: event.target.value});
        }} value={this.state.value}/>
        {/* searchAPI uses the state value of this component as the query input on the searchAPI method */}
        <button className="searchsubmit" onClick={() => {this.searchAPI()}}>Search</button>
      </div>
    )
  }
}

window.SearchBox = SearchBox;
