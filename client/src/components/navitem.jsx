class Navitem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value:''
    }
  }
  somefunction(){
    this.setState({
      value: 'something'
    })
  }
  render(){
    return(
      <div className="navitem">
        <ul>
          <a href='/home'><li>Home</li></a>
          <a href='/search'><li>Search</li></a>
          <a href='/saved'><li>Saved</li></a>
          <a href='/login'><li>Login</li></a>
        </ul>
      </div>
    )
  }
}

window.Navitem = Navitem;
