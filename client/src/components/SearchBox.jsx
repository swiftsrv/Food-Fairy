class SearchBox extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <input className="searchbox" type='text'/>
        <button className='submitButton'>Search</button>
      </div>
    )
  }
}

window.SearchBox = SearchBox;

