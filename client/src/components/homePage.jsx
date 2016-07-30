//the homepage. Rendered from __dirname + '/'
var Home = (props) => (
  /* props: searchAPI  function with an ajax call to the API */
  /* container div */
  <div className="homepage">
    <Header />
    {/* img seperating green welcome div from the header
      implemented poorly currently. Needs a listener to update the width on a
      window resize */}
    <div><img className="center-block" style={{width: window.innerWidth}} src="imgs/bgsh.jpg"></img></div>
    {/* green welcome div at the bottom of the home page */}
    <div className="homebox">
      <div className="homeIntro center-block">
        <p>Welcome to Foraje.com! Just tell us what ingrediants you have lying around your house and we'll whip you up a recipe in no time!</p>
      </div>
      <SearchBox searchAPI={props.searchAPI}/>
    </div>
  </div>
)

window.Home = Home;
