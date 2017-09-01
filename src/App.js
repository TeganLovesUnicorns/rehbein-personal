import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './App.css';
import Footer from '../src/Footer.js';
import HomeSlider from '../src/HomeSlider.js';


class App extends Component {
  render() {
    return (
      <div>
        <HomeSlider />
        <Footer />
      </div>
    );
  }
}



export default App;
