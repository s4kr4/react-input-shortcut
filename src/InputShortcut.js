import React, { Component } from 'react'

const keycodes = {
  DIGIT_ZERO: 48,
  KEY_Z: 122,
}

export default class InputShortcut extends Component {
  constructor() {
    super()

    this.state = {
      textValue: ''
    }

    this._isPrintableKey = this._isPrintableKey.bind(this)
    this._handleKeyDown = this._handleKeyDown.bind(this)
  }

  _isPrintableKey(keyCode) {
    if (keycodes.DIGIT_ZERO <= keyCode && keyCode <= keycodes.KEY_Z) {
      return true
    } else {
      return false
    }
  }

  _handleKeyDown(event) {
    console.log(event.key);
    event.preventDefault()
    event.stopPropagation()

    let key = ''

    if (this._isPrintableKey(event.keyCode)) {
      let prefix = ''

      if (event.ctrlKey) {
        prefix += 'Ctrl+'
      }

      if (event.shiftKey) {
        prefix += 'Shift+'
      }

      if (event.altKey) {
        prefix += 'Alt+'
      }

      key = prefix + event.key.toUpperCase()
    }

    this.setState({
      textValue: key
    })
  }

  componentDidMount() {
    const node = findDOMNode(this)
    node.addEventListener('keydown', this._handleKeyDown, false)
  }

  componentWillUnmount() {
    const node = findDOMNode(this)
    node.removeEventListener('keydown', this._handleKeyDown)
  }

  render() {
    return (
      <input
        className="InputShortcut"
        ref="input"
        value={ this.state.textValue } />
    )
  }
}

