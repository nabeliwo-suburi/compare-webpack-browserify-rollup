import React, { Component } from 'react';

const ENTER_KEY_CODE = 13;

export default class TodoTextInput extends Component {

  constructor(...args) {
    super(...args);

    this.state = { value: this.props.value || '' };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  render() {
    return (
      <input
        className={this.props.className}
        id={this.props.id}
        placeholder={this.props.placeholder}
        onBlur={this.handleBlur}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
        value={this.state.value}
        autoFocus={true}
      />
    );
  }

  _save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  }

  handleBlur() {
    this._save();
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleKeyDown(e) {
    if (e.keyCode === ENTER_KEY_CODE) {
      this._save();
    }
  }

}
