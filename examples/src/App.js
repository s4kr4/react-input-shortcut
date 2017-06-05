import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InputShortcut from 'react-input-shortcut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test of "react-input-shortcut"</h2>
        </div>
        <InputShortcut />
      </div>
    );
  }
}

export default App;
