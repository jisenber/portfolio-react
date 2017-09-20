import React from 'react';
import createReactClass from 'create-react-class';
import {NavLink} from 'react-router-dom';




export var Portfolio = createReactClass({
  render: function() {
    return (
      <div>
        <h2 className = "title"> Web App Portfolio </h2>
        <hr></hr>
        <Slider/>
      </div>
    );
  }
});

var Slider = createReactClass({
  getInitialState: function() {
    return {
      count: 1 //creates this.state.count
    };
  },
  //increase and decrease carousel functions
  increase: function(e) {
    if(this.state.count < 3) {
      this.setState ({
        count: this.state.count + 1
      });
    } else {
      this.setState ({
        count: 1
      });
    }
    e.preventDefault();
  },
  decrease: function(e) {
    if (this.state.count > 1) {
      this.setState ({
        count: this.state.count -1
      });
    } else {
      this.setState ({
        count: 3
      });
    }
    e.preventDefault();
  },

  render: function() {
    return (
      <div>
        { this.state.count === 1 ? <Slide imgSrc="https://i.imgur.com/4260Qwd.png" title="Space Invaders/Parking Hall of Shame" desc="A platform to shame those who park poorly" tools="Node, Express, jQuery, Mongo, Nunjucks" navigate="https://github.com/jkwong5/ParkingHOS" devYear= "2016, 2017 (refactor)"/> : null }
        { this.state.count === 2 ? <Slide imgSrc="https://i.imgur.com/X6df5yM.png" title="Devolunteer" desc="A platform to connect software developers and non-profits" tools="Mongo, Express, Angular, Node" navigate="https://github.com/devolunteer/devolunteer" devYear="2017"/> : null }
        { this.state.count === 3 ? <Slide imgSrc="https://i.imgur.com/omgHKYp.png" title="World Capitals Game" desc="A world capitals trivia game (first app I ever built!)" tools="Sweet Vanilla JavaScript" navigate="https://github.com/jisenber/World_Capitals_Game" devYear="2015"/> : null }
        <button className="btn btn-primary" id="counterNext" onClick={this.increase}>NEXT PROJECT</button>
        <button className="btn btn-primary" id="counterPrev" onClick={this.decrease}>PREVIOUS PROJECT</button>
      </div>
    );
  }
});

//
var Slide = createReactClass({
  render: function() {
    return (
      <div>
        <div className="outsideSlide">
          <table className="table">
            <thead>
              <tr>
                <th>Primary Tools</th>
                <th>Github Repo</th>
                <th>Year Developed</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.tools}</td>
                <td><NavLink to={this.props.navigate} className = "btn btn-primary">View Repo</NavLink></td>
                <td>{this.props.devYear}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="slideContainer">
          <div className="image">
            <img src={this.props.imgSrc}/>
          </div>
          <div className="main">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
          </div>
        </div>
      </div>
    );
  }
});
