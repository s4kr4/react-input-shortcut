//@flow
import React, { Component } from 'react'

type State = {
  textValue: string
}

type Props = {
  allowNumber: ?boolean
}

const keycodes = {
  DIGIT_ZERO: 48,
  DIGIT_NINE: 57,
  KEY_A: 65,
  KEY_Z: 90,
}

export default class InputShortcut extends Component {
  state: State
  props: Props
  input: HTMLInputElement

  constructor() {
    super()

    this.state = {
      textValue: ''
    }
  }

  _isAlphabetKey(keyCode: number): boolean {
    if (keycodes.KEY_A <= keyCode && keyCode <= keycodes.KEY_Z) {
      return true
    } else {
      return false
    }
  }

  _isNumberKey(keyCode: number): boolean {
    if (keycodes.DIGIT_ZERO <= keyCode && keyCode <= keycodes.DIGIT_NINE) {
      return true
    } else {
      return false
    }
  }

  _isValidKey(keyCode: number): boolean {
    if (!this.props.allowNumber && this._isNumberKey(keyCode)) {
      return false
    } else if (this._isAlphabetKey(keyCode) || this._isNumberKey(keyCode)) {
      return true
    } else {
      return false
    }
  }

  _handleKeyDown(event: Event): void {
    if (!(event instanceof KeyboardEvent)) {
      throw new Error("Invalid event type error.")
    }

    event.preventDefault()
    event.stopPropagation()

    let key = ''

    if (this._isValidKey(event.keyCode)) {
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

