// ReactDOM.render(<Router history={browserHistory}>
//     <Route path="/" component={App}>
//       <Route path="about" component={About}/>
//       <Route path="users" component={Users}>
//         <Route path="/user/:userId" component={User}/>
//       </Route>
//       <Route path="*" component={NoMatch}/>
//     </Route>
//   </Router>, document.getElementById('app'))

ReactDOM.render(<App />,document.getElementById('app'));
