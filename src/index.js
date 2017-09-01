import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Header from './Header';


ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
