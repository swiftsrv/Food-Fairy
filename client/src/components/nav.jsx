var Nav = (props) => (
  <nav className="container-fluid">
    <div className="row text-center navbar">
      <a href="/home"><div className="col-md-2 col-sm-2 navpad">Home</div></a>
      <a href="/search"><div className="col-md-2 col-sm-2 navpad line">Search</div></a>
      <div className="col-md-4 col-sm-4"><img className="center-block logo" src="imgs/logo2.png" /></div>
      <a href="/saved"><div className="col-md-2 col-sm-2 navpad line">Saved</div></a>
      <a href="/login"><div className="col-md-2 col-sm-2 navpad">Login</div></a>
    </div>
  </nav>
)

window.Nav = Nav;
