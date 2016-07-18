class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='header'>
        <Logo />
        <Nav />
      </div>
    )
  }
}

window.Header = Header;