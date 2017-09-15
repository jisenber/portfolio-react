import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class'
import {Route, HashRouter, Link } from 'react-router-dom'

var HelloWorld = createReactClass({
  render: function() {
    return (
      <h1>Hello, {this.props.greetTarget}</h1>
    )
  }
});

var App = createReactClass ({
  render: function() {
    return (
      <div>
        <ul className = "header">
          <li><Link to="/" activeClassName="active">Home</Link></li>
        </ul>
      </div>
    );
  }
});

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={App}>
    </Route>
  </HashRouter>,
  document.querySelector('#container')
);
