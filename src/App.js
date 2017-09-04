import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Footer from '../src/Footer.js';
import HomeSlider from '../src/HomeSlider.js';
import MenuBar from './MenuBar.js';



class App extends Component {
  render() {
    return (
      <div className='container' >
        <MenuBar />
        <HomeSlider />
        <Footer />
      </div>
    );
  }
}



export default App;
