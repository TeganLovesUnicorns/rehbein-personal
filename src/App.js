import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Header from '../src/Header.js';
import HomeSlider from '../src/HomeSlider.js';


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <HomeSlider />
      </div>
    );
  }
}



export default App;
