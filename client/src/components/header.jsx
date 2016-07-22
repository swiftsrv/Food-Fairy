class Header extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className='header'>
        <Nav />
      </div>
    )
  }
}

window.Header = Header;
