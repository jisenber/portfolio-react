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
import '../style/react-image-override.css'

var sourceURL = 'https://raw.githubusercontent.com/jisenber/portfolio-react/photopages/src/assets/hobby_images'


class PhotoPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      images: []
    }
    this.loadImages = this.loadImages.bind(this)
  }

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  loadImages() {
    var images = [];
    for (var i = 1; i < 10; i++) {
      console.log(`${sourceURL}/${this.props.hobby}/${this.props.img}${i}.png`);
      images.push({
        original: `${sourceURL}/${this.props.hobby}/${this.props.img}${i}.png`,
        thumbnail: `${sourceURL}/${this.props.hobby}/${this.props.img}${i}.png`
      })
    }
    return images
  }

  componentWillMount() {
    var images = this.loadImages()
    this.setState({
      images: images
    })
  }



  render() {

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
