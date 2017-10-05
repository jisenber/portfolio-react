import React, {Component} from 'react';
import {ImageCard} from '../index.js';


//
export class GallerySeries extends Component{
  render () {
    return (
      <div className ="cardContainer">
        <div className="cardRow">
          <ImageCard title="Skiing" imgSrc={require('../assets/hobby_images/skiing/skiing_cover.png')} navigate="/hobbies/skiing" linkText="View Photos"/>
          <ImageCard title="Social" imgSrc={require('../assets/hobby_images/social/social_cover_small.png')} navigate="/hobbies/social" linkText="View Photos"/>
          <ImageCard title="Hiking" imgSrc={require('../assets/hobby_images/hiking/hiking_cover.png')} navigate="/hobbies/hiking" linkText="View Photos"/>
          <ImageCard title="Cat" imgSrc={require('../assets/hobby_images/cat/cat_cover_small.png')} navigate="/hobbies/cat" linkText="View Photos"/>
          <ImageCard title="Music" imgSrc={require('../assets/hobby_images/music/music_cover.png')} navigate="/hobbies/music" linkText="View Photos"/>
          <ImageCard title="Travel" imgSrc={require('../assets/hobby_images/travel/travel_cover_small.png')} navigate="/hobbies/Travel" linkText="View Photos"/>
        </div>
      </div>
    );
  }
}
