var Nav = (props) => (
  <nav className="container-fluid navbar">
    <ul>
      <a href='/home'><li>Home</li></a>
      <a href='/search'><li>Search</li></a>
      <li><div className="logoimage"></div></li>
      <a href='/saved'><li>Saved</li></a>
      <a href='/login'><li>Login</li></a>
    </ul>
  </nav>
)

window.Nav = Nav;
