import React, { Component } from 'react';

class ComponentVisualButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.buttonOnClick();
  }

  render() {
    return (
      <button type="button" className="btn btn-secondary" onClick={this.handleClick}>{this.props.name}</button>
    );     
  }
}    

export default ComponentVisualButton;
