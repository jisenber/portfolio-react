import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import {Route, HashRouter, NavLink } from 'react-router-dom';
import {Bio} from './pages/bio.jsx';
import {Portfolio} from './pages/portfolio.jsx';
import {Contact} from './pages/contact.jsx';
import {Hobbies} from './pages/hobbies.jsx';


var ImageCard = createReactClass ({
  render: function() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.imgSrc}/>
        <div className="card-block">
        <h4 className="card-title"> {this.props.title} </h4>
        <p className="card-text">{this.props.text} </p>
          <NavLink to={this.props.navigate} className = "btn btn-primary">{this.props.linkText}</NavLink>
        </div>
      </div>
    );
  }
});

var Home = createReactClass({
  render: function() {
    return (
      <div className= "cardLine">
        <ImageCard title="Portfolio" imgSrc="https://imgur.com/gnc6ZWL.png" text="click to see my portfolio" navigate="/portfolio" linkText="View Portfolio"/>
        <ImageCard title="Bio" imgSrc="https://i.imgur.com/T7wtxaV.png" text="click to see my bio" navigate="/bio" linkText="View Bio"/>
        <ImageCard title="Hobbies" imgSrc="https://imgur.com/1NPUqan.png" text="I also enjoy fun things" navigate="/hobbies" linkText="View Hobbies"/>
      </div>
    );
  }
});

//Nav Bar with links
var Nav = createReactClass ({
  render: function() {
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-default navbar-fixed-top">
          <ul id="nav_pills" className="nav nav-pills" role="tablist">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/bio">Bio</NavLink></li>
            <li><NavLink to="/portfolio">Portfolio</NavLink></li>
            <li><NavLink to="/hobbies">Hobbies</NavLink></li>
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
      <Nav/>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/bio" component={Bio}></Route>
      <Route exact path="/portfolio" component={Portfolio}></Route>
      <Route exact path="/hobbies" component={Hobbies}></Route>
      <Route exact path="/contact" component={Contact}></Route>
    </div>
  </HashRouter>,
  document.querySelector('#container')
);
