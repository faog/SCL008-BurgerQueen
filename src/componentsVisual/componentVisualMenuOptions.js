import React, { Component } from 'react';

const menuFile = require('../data/menuBurgerQueen');

class ComponentVisualMenuOptions extends Component {
  breakfast() {
    const breakfastElement = menuFile.breakfast.map((e) => {
      return (
        <li>{e.name}</li>
      );
    })
    return breakfastElement;
  }

  lunch() {
    const lunchElement = menuFile.lunch.map((e) => {
      return (
        <li>{e.name}
        {e.size ? e.size.map(s => {
          return (
            <ul>{s.name}</ul>
          );
        }) : ''}
        </li>
      );
    })
    return lunchElement;
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
