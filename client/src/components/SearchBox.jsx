class SearchBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {value: ''};
  }

  saveSearch(){
    //For testing purposes. Want to ensure Heroku database works

    //save search
    $.ajax({
      url: '/api/searches',
      type: 'POST',
      data: { query: this.state.value },
      success: function(data) {
        // console.log('success')
      }.bind(this),
      error: function() {
        // console.log('failure')
      }
    });
  }

  listSearch(){
    //grab all past searches
    $.ajax({
      url: '/api/searches',
      type: 'GET',
      success: function(data) {
        // console.log('success' + JSON.stringify(data))
      }.bind(this),
      error: function() {
        // console.log('failure')
      }
    });
  }

  searchAPI() {
    // console.log(this.props);
    this.props.searchAPI({query: this.state.value}, (recipes) => {
      this.props.callback(recipes);
    });
  }

  render(){
    return(
      <div>
        <input className="searchbox" type="text" onChange={(event) => {
          this.setState({value: event.target.value});
        }} value={this.state.value}/>
        <button className="submitButton" onClick={() => {this.searchAPI(); this.saveSearch(); this.listSearch();}}>Search</button>
      </div>
    )
  }
}

window.SearchBox = SearchBox;

