import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import InputShortcut from 'react-input-shortcut';

class App extends Component {
  constructor() {
    super()
    this.state = {
      text: ''
    }
  }

  handleSubmit() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Test of "react-input-shortcut"</h2>
        </div>
        <form action="javascript:void(0)" onSubmit={this.handleSubmit.bind(this)}>
          <div>
            Alphabet + Number: <InputShortcut name="number" allowNumber />
          </div>
          <div>
            Alphabet Only: <InputShortcut name="alphabet" value={this.state.text} />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    );
  }
}

export default App;
