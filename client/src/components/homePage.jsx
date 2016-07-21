class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='home'>
        <Header />
        <SearchBox searchAPI={this.props.searchAPI}/>
      </div>
    )
  }
}

window.Home = Home;