import React, {Component} from 'react';
import {ImageCard} from '../index.js';



export class GallerySeries extends Component{
  render () {
    return (
      <div className ="cardContainer">
        <div className="cardRow">
          <ImageCard title="Skiing" imgSrc={require('../assets/hobby_images/skiing/skiing_cover.png')} text="Skiing photos" navigate="/hobbies/skiing" linkText="View Skiing photos"/>
          <ImageCard title="Social" imgSrc={require('../assets/hobby_images/social/social_cover_small.png')} text="Social photos" navigate="/hobbies/social" linkText="View misc fun photos"/>
          <ImageCard title="Hiking" imgSrc={require('../assets/hobby_images/hiking/hiking_cover.png')} text="hiking photos" navigate="/hobbies/hiking" linkText="Hiking Photos"/>
          <ImageCard title="Cat" imgSrc={require('../assets/hobby_images/cat/cat_cover_small.png')} text="Cat photos" navigate="/hobbies/cat" linkText="Cat photos"/>

        </div>
      </div>
    );
  }
}



/*


// class Weather extends Component {
//   constructor(props) {
//     super(props);
//
//     this.state = {forecast: [], lat:'', lng:'', calLat:'', calLng:'', location:'', history:[], currentDate: '', startDate: moment(), historicLocation:'', displayBarChart:false, displayHistoricChart: false, one:'', two:'', three:'', four:'', five:''};
//     this.weatherService = new WeatherService();
//     this.authService = new AuthService();
//
//     this.handleDateChange = this.handleDateChange.bind(this);
//
//   }

class GallerySeries extends Component {
  render () {
    return (
      <div>
      <p>Pictures coming soon!</p>
      </div>
    );
  }
}

export default GallerySeries

*/
