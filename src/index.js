import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Route, HashRouter} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import {Bio} from './pages/bio.js';
import {Portfolio} from './pages/portfolio.js';
import {GallerySeries} from './pages/hobbies.js';
import PhotoPage from './pages/Photo.js';


export class ImageCard extends Component {
  render() {
    return (
      <div className="card">
        <img className="card-img-top" src={this.props.imgSrc} alt=""/>
        <div className="card-block">
          <h4 className="card-title"> {this.props.title} </h4>
          <p className="card-text">{this.props.text} </p>
          <NavLink to={this.props.navigate} className = "btn btn-primary">{this.props.linkText}</NavLink>
        </div>
      </div>
    );
  }
}

export class Home extends Component {
  render() {
    return (
      <div>
        <h2 className = "title"> Welcome to Jacob Isenberg&apos;s Personal Website </h2>
        <h5 className= "title"><em>An extraordinary static page masterpiece</em> -The New York Times</h5>
        <hr></hr>
        <div className="cardContainer">
          <ImageCard title="Portfolio" imgSrc="https://i.imgur.com/gnc6ZWL.png" text="click to see my web app portfolio" navigate="/portfolio" linkText="View Portfolio"/>
          <ImageCard title="Bio" imgSrc="https://i.imgur.com/T7wtxaV.png" text="click to see my bio" navigate="/bio" linkText="View Bio"/>
          <ImageCard title="Hobbies" imgSrc="https://i.imgur.com/1NPUqan.png" text="I also enjoy fun things" navigate="/hobbies" linkText="View Hobbies"/>
        </div>
      </div>
    );
  }
}

//Nav Bar with links
export class Nav extends Component {
  render() {
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
}


export class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Nav/>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/bio" component={Bio}></Route>
          <Route exact path="/portfolio" component={Portfolio}></Route>
          <Route exact path="/hobbies" component={GallerySeries}></Route>
          <Route exact path="/hobbies/cat" render={() => ( <PhotoPage  hobby='cat' img="CAT_IMG_" />)}/>
          <Route exact path="/hobbies/hiking" render={() => ( <PhotoPage  hobby='hiking' img="HIKING_IMG_" />)}/>
          <Route exact path="/hobbies/music" component={PhotoPage}></Route>
          <Route exact path="/hobbies/social" render={() => ( <PhotoPage  hobby='social' img="SOCIAL_" />)}/>
          <Route exact path="/hobbies/travel" component={PhotoPage}></Route>
          <Route exact path='/hobbies/skiing' render={() => ( <PhotoPage  hobby='skiing' img="SKI_IMG_" />)}/>
        </div>
      </HashRouter>
    );
  }
}



const render = Component => {
  ReactDOM.render(
  <div>
    <Component/>
  </div>,
  document.querySelector('#root')
  );
}

render(App)
