import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';

const menuFile = require('../data/menuBurgerQueen');

class ComponentVisualMenuOptions extends Component {
  breakfast() {
    const breakfastElement = menuFile.breakfast.map((e) => {
      return (
        <ComponentVisualButton name = {e.name} />
      )
    })
    return breakfastElement;
  }

  lunch() {
    const lunchElement = menuFile.lunch.map((e) => {
      return (
        <p>{e.name}
        {e.size ? e.size.map(s => {
          return (
            <ComponentVisualButton name = {s.name} />
          );        
        }) : <ComponentVisualButton name = {e.name} />}
        </p>
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
