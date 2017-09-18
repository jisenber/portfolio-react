import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class'
import {Route, HashRouter, NavLink } from 'react-router-dom'

var Bio = createReactClass ({
  render: function() {
    return (
      <div>
        <div>
          <Nav/>
        </div>
        <p className="pushDown"> This is the Bio page</p>
    </div>
    )
  }
})

var Portfolio = createReactClass({
  render: function() {
    return (
      <div>
          <Nav/>
        <p className="pushDown"> This is the Portfolio page</p>
        </div>
    )
  }
})

var Contact = createReactClass({
  render: function() {
    return (
      <div>
        <div>
          <Nav/>
        </div>
        <p className="pushDown"> This is the Contact page</p>
    </div>
    )
  }
})

var Home = createReactClass({
  render: function() {
    return (
      <div>
        <div>
          <Nav/>
        </div>
        <p className="pushDown"> This is the Home page</p>
    </div>
    )
  }
})

var Nav = createReactClass ({
  render: function() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-default navbar-fixed-top">
          <ul id="nav_pills" className="nav nav-pills" role="tablist">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/bio">Bio</NavLink></li>
          <li><NavLink to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
        </nav>
      </div>
    );
  }
});

ReactDOM.render(
  <HashRouter>
  <div>
    <Route exact path="/" component={Home}></Route>
    <Route exact path="/bio" component={Bio}></Route>
    <Route exact path="/portfolio" component={Portfolio}></Route>
    <Route exact path="/contact" component={Contact}></Route>
  </div>
  </HashRouter>,
  document.querySelector('#container')
);
