import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './router.js';

import {HashRouter, Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <header className="App-logo-container">
            <img src={logo} className="App-logo"/>
            <h1 className="App-title">SHELFIE</h1>
          </header>
        </div>
        <h2 className="Shelf-list">
          <button className="Shelf-buttons" id="Shelf-a"><a href = "https://www.google.com/">Shelf A</a></button>
          <button className="Shelf-buttons" id="Shelf-b"><a href = "https://www.google.com/">Shelf B</a></button>
          <button className="Shelf-buttons" id="Shelf-c"><a href = "https://www.google.com/">Shelf C</a></button>
          <button className="Shelf-buttons" id="Shelf-d"><a href = "https://www.google.com/">Shelf D</a></button>
        </h2>
      </div>
    );
  }
}

export default App;
