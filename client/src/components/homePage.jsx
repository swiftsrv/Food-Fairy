class Home extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='home'>
        <Header />
        <SearchBox />
      </div>
    )
  }
}

window.Home = Home;