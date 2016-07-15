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
          <li><a href='/home'>Home</a></li>
          <li><a href='/search'>Search</a></li>
          <li><a href='/saved'>Saved</a></li>
        </ul>
      </div>
    )
  }
}

window.Navitem = Navitem;