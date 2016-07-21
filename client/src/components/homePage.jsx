class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Header />
      <div className="container-fluid"><img className="center-block homebg" src="imgs/bg.png"/></div>
      <div className="homebox">
        <SearchBox searchAPI={this.props.searchAPI}/>
      </div>
    )
  }
}

window.Home = Home;
