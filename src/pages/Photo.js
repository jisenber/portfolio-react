// import React from 'react';
// import Gallery from 'react-photo-gallery';

// class PhotoPage extends Component {
//   render () {
//     return (
//       <div>
//         <Gallery photos = {PHOTO_SET} onClick={this.openLightbox}/>
//       </div>
//     );
//   }
// }

import ImageGallery from 'react-image-gallery';
import React, {Component} from 'react'
import 'react-image-gallery/styles/css/image-gallery.css'


var images = [];

function loadImages(pathway) {
  for (var i = 1; i < 6; i++) {
    images.push({
      original: pathway,
      thumbnail: pathway
    })
  }
  return images
}

class PhotoPage extends Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  componentWillMount() {
    images = loadImages('https://i.imgur.com/clml59T.png')
    console.log('images loaded');
    console.log(images);
  }



  render() {

    // const images = [
    //   {
    //     original: require('../assets/hobby_images/skiing/SKI_IMG_1.png'),
    //     thumbnail: require('../assets/hobby_images/skiing/SKI_IMG_1.png'),
    //   },
    //   {
    //     original: require('../assets/hobby_images/skiing/SKI_IMG_2.png'),
    //     thumbnail: require('../assets/hobby_images/skiing/SKI_IMG_2.png')
    //   },
    //   {
    //     original: 'http://lorempixel.com/1000/600/nature/3/',
    //     thumbnail: 'http://lorempixel.com/250/150/nature/3/'
    //   }
    // ]
//
    return (
    <div className = "picturePageContainer">
      <div className = "imageContainer">
        <ImageGallery
          items={images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}/>
      </div>
    </div>
    );
  }
}

export default PhotoPage
