# react-input-shortcut

[![Build Status](https://travis-ci.org/s4kr4/react-input-shortcut.svg?branch=master)](https://travis-ci.org/s4kr4/react-input-shortcut)

Make typing shortcut keys easily.


## Description

With this component, you can type shortcut keys (i.e. 'Ctrl+Q', 'Ctrl+Alt+Q', ...) easily.  
For example, if you want to type 'Ctrl+Q', only you have to do is hit 'Q' key with 'Ctrl'.


## Installation

```sh
$ npm install --save react-input-shortcut
or
$ yarn add react-input-shortcut
```


## Usage

```javascript
import React, { Component } from 'react';

import InputShortcut from 'react-input-shortcut';

class App extends Component {
  render() {
    return (
      <div className="App">
        <InputShortcut />
      </div>
    );
  }
}
```


## API

|API|Effect|
|:--|:--|
|allowNumber|Enable using number(i.e. 'Ctrl+1')|


## LICENSE

MIT
