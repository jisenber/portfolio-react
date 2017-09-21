import React from 'react';
import ReactDOM from 'react-dom';
import createReactClass from 'create-react-class';
import {Route, HashRouter, NavLink } from 'react-router-dom';
import {Bio} from './pages/bio.jsx';
import {Portfolio} from './pages/portfolio.jsx';
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
      <div>
        <h2 className = "title"> Welcome to Jacob Isenberg&apos;s Personal Website </h2>
        <h5 className= "title"><em>An Extraordinary Static Page Masterpiece</em> -The New York Times</h5>
        <hr></hr>
        <ImageCard title="Portfolio" imgSrc="https://i.imgur.com/gnc6ZWL.png" text="click to see my web app portfolio" navigate="/portfolio" linkText="View Portfolio"/>
        <ImageCard title="Bio" imgSrc="https://i.imgur.com/T7wtxaV.png" text="click to see my bio" navigate="/bio" linkText="View Bio"/>
        <ImageCard title="Hobbies" imgSrc="https://i.imgur.com/1NPUqan.png" text="I also enjoy fun things" navigate="/hobbies" linkText="View Hobbies"/>
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
            <li><NavLink to="/"><b>Home</b></NavLink></li>
            <li><NavLink to="/bio"><b>Bio</b></NavLink></li>
            <li><NavLink to="/portfolio"><b>Portfolio</b></NavLink></li>
            <li><NavLink to="/hobbies"><b>Hobbies</b></NavLink></li>
          </ul>
          <a href="https://linkedin.com/in/jisenber"><i className="fa fa-linkedin-square fa-2x"></i></a>
          <a href="https://github.com/jisenber"><i className="fa fa-github-square fa-2x"></i></a>
          <a href="mailto:jisenber25@gmail.com"><i className="fa fa-envelope fa-2x"></i></a>
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
    </div>
  </HashRouter>,
  document.querySelector('#container')
);
