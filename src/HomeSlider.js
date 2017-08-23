import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
require('./Slider.css');

var imgLocation

class HomeSlider extends React.Component {

 handleImageLoad(event) {
   console.log('Image loaded ', event.target)
 }

 render() {

   const images = [
     {
       original: '/img/homeslider/1.jpg',
       thumbnail: '/img/homeslider/thumb/1.jpg',
       description: 'Amos Lee Summer 2017'
     },
     {
       original: '/img/homeslider/2.jpg',
       thumbnail: '/img/homeslider/thumb/2.jpg'
     },
     {
      original: '/img/homeslider/3.jpg',
      thumbnail: '/img/homeslider/thumb/3.jpg',
      description: 'Amos Lee Spring 2017'
     }
   ]

   return (
     <ImageGallery
       items={images}
       slideInterval={10000}
       onImageLoad={this.handleImageLoad}
       autoPlay={true}
       />
   );
 }

}

export default HomeSlider;