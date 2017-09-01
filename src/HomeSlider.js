import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
require('./Slider.css');


// imgLoc is file path to image folder of non compiled site.
var imgLoc = '/img/homeslider/';

class HomeSlider extends Component {

 handleImageLoad(event) {
   console.log('Image loaded ', event.target)
 }

 render() {

   const images = [
     {
       original: imgLoc + '1.jpg',
       thumbnail: imgLoc + 'thumb/1.jpg',
       description: 'Amos Lee Summer 2017'
     },
     {
       original: imgLoc + '2.jpg',
       thumbnail: imgLoc + 'thumb/2.jpg'
     },
     {
      original: imgLoc + '3.jpg',
      thumbnail: imgLoc + 'thumb/3.jpg',
      description: 'Amos Lee Spring 2017'
     }
   ]

   return (
     <ImageGallery
       items={images}
       slideInterval={10000}
       onImageLoad={this.handleImageLoad}
       autoPlay={true}
       showThumbnails={false}
       showBullets={true}

       />
   );
 }

}

export default HomeSlider;