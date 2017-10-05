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

var sourceURL = 'https://raw.githubusercontent.com/jisenber/portfolio-react/photopages/src/assets/hobby_images/skiing/'

function loadImages() {
  var images = [];
  for (var i = 1; i < 9; i++) {
    images.push({
      original: `${sourceURL}SKI_IMG_${i}.png`,
      thumbnail: `${sourceURL}SKI_IMG_${i}.png`
    })
  }
  return images
}

class PhotoPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: []
    }

  }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  componentWillMount() {
    var images = loadImages()
    this.setState({
      images: images
    })
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
          items={this.state.images}
          slideInterval={2000}
          onImageLoad={this.handleImageLoad}/>
      </div>
    </div>
    );
  }
}

export default PhotoPage
