class SearchPage extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }
  render(){
    return(
      <div className='searchpage'>
        <Header />
        <input className="searchbox" type='text' value={this.state.value}/>
        <button className='submitButton'>Search</button>
        <RecipeList />
      </div>
    )
  }
}

window.SearchPage = SearchPage;