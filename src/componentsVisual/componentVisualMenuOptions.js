import React, { Component } from 'react';

const menuFile = require('../data/menuBurgerQueen');

class ComponentVisualMenuOptions extends Component {
  breakfast() {
    const breakfastElement = menuFile.breakfast.map(e => {
      return (
        <li>{e.name}-{e.price}</li>
      )
    })
    return breakfastElement;
  }

  lunch() {
    return JSON.stringify(menuFile.lunch);
  }

  render() {
    return (
      <div>
        {this.props.menuname}
        {this.props.menuname === 'Desayuno' ? this.breakfast() : ''}
        {this.props.menuname === 'Resto del día' ? this.lunch() : ''}
      </div>
    );
  }
}

export default ComponentVisualMenuOptions;
