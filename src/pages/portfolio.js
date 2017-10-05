import React, { Component } from 'react';


export class Portfolio extends Component {
  render () {
    return (
      <div>
        <h2 className = "title"> Web App Portfolio </h2>
        <hr></hr>
        <Slider/>
      </div>
    );
  }
}

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    };

    this.increase = this.increase.bind(this);
    this.decrease = this.decrease.bind(this);
  }

  increase(e) {
    e.preventDefault();
    if(this.state.count < 4) {
      this.setState ({
        count: this.state.count + 1
      });
    } else {
      this.setState ({
        count: 1
      });
    }
  }

  decrease(e) {
    e.preventDefault();
    if (this.state.count > 1) {
      this.setState ({
        count: this.state.count -1
      });
    } else {
      this.setState ({
        count: 4
      });
    }

  }
  render () {
    return (
      <div className = "sliderBox">
        { this.state.count === 1 ? <a target="_blank" rel="noopener noreferrer" href="https://allweather.herokuapp.com"> <Slide imgSrc="https://i.imgur.com/szTjhCu.png" title="Allweather" desc="A weather forecasting tool for any location or time" tools="React, React-vis, Mongo, Express," github="https://github.com/jisenber/weatherapp-frontend" deployed="https://allweather.herokuapp.com" devYear= "2017" href/></a> : null }
        { this.state.count === 2 ? <a target="_blank" rel="noopener noreferrer" href="https://parking-hall-of-shame.herokuapp.com"><Slide imgSrc="https://i.imgur.com/uqW6XlH.png" title="Space Invaders/Parking Hall of Shame" desc="A platform to shame those who park poorly" tools="Node, Express, jQuery, Mongo, Nunjucks" github="https://github.com/jkwong5/ParkingHOS" deployed="https://parking-hall-of-shame.herokuapp.com" devYear= "2016, 2017 (refactor)"/></a> : null }
        { this.state.count === 3 ? <a target="_blank" rel="noopener noreferrer" href="https://devolunteer.herokuapp.com"> <Slide imgSrc="https://i.imgur.com/cnP4xe3.png" title="Devolunteer" desc="A platform to connect software developers and non-profits" tools="Mongo, Express, Angular, Node" github="https://github.com/devolunteer/devolunteer" deployed="https://devolunteer.herokuapp.com" devYear="2017"/></a> : null }
        { this.state.count === 4 ? <a target="_blank" rel="noopener noreferrer" href="http://jisenber.github.io/World_Capitals_Game/"> <Slide imgSrc="https://i.imgur.com/XGGrrum.png" title="World Capitals Game" desc="A world capitals trivia game (first app I ever built!)" tools="Sweet Vanilla JavaScript" github="https://github.com/jisenber/World_Capitals_Game" deployed="https://jisenber.github.io/World_Capitals_Game" devYear="2015"/></a> : null }
        <button className="btn btn-primary" id="counterNext" onClick={this.increase}>NEXT PROJECT</button>
        <button className="btn btn-primary" id="counterPrev" onClick={this.decrease}>PREVIOUS PROJECT</button>
      </div>
    );
  }
}


class Slide extends Component {
  render() {
    return (
      <div className="portfolioContainer">
        <div className="outsideSlide">
          <table className="table">
            <thead>
              <tr>
                <th>Primary Tools</th>
                <th>Github Repo</th>
                <th>Live Site</th>
                <th>Year</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{this.props.tools}</td>
                <td><a href={this.props.github} className = "btn btn-primary">View Repo</a></td>
                <td><a href={this.props.deployed} className="btn btn-primary">View Site</a></td>
                <td>{this.props.devYear}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="slideContainer">
          <div className="image">
            <img src={this.props.imgSrc} alt =""/>
          </div>
          <div className="main">
            <h3>{this.props.title}</h3>
            <p>{this.props.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
