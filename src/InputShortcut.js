//@flow
import React, { Component } from 'react'

type State = {
  textValue: string
}

const keycodes = {
  DIGIT_ZERO: 48,
  KEY_Z: 122,
}

export default class InputShortcut extends Component {
  state: State
  input: HTMLInputElement

  constructor() {
    super()

    this.state = {
      textValue: ''
    }
  }

  _isPrintableKey(keyCode: number) {
    if (keycodes.DIGIT_ZERO <= keyCode && keyCode <= keycodes.KEY_Z) {
      return true
    } else {
      return false
    }
  }

  _handleKeyDown(event: Event) {
    if (!(event instanceof KeyboardEvent)) {
      throw new Error("Invalid event type error.")
    }

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
    const node = this.input
    node.addEventListener('keydown', this._handleKeyDown.bind(this), false)
  }

  componentWillUnmount() {
    const node = this.input
    node.removeEventListener('keydown', this._handleKeyDown.bind(this))
  }

  render() {
    return (
      <input
        className="InputShortcut"
        ref={ (ref) => this.input = ref }
        value={ this.state.textValue } />
    )
  }
}

