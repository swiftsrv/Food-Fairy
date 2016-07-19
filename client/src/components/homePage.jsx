class Home extends React.Component {
  constructor(props){
    super(props);
    this.state={
      value:''
    }
  }
  render(){
    return(
      <div className='home'>
        <Header />
        <input className="searchbox" type='text' value={this.state.value}/>
        <button className='submitButton'>Search</button>
      </div>
    )
  }
}

window.Home = Home;