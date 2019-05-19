import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualMenuOptions.css';

const menuFile = require('../data/menuBurgerQueen');

class ComponentVisualMenuOptions extends Component {
  breakfast() {
    const breakfastElement = menuFile.breakfast.map((element) => {
      return (
        <ComponentVisualButton name = {element.name}/>
      )
    })
    return breakfastElement;
  }

  lunch() {
    const lunchElement = menuFile.lunch.map((element) => {
      return (
        <p>{element.name}
        {element.size ? element.size.map(size => {
          return (
            <ComponentVisualButton name = {size.name} />
          );        
        }) : <ComponentVisualButton name = {element.name} />}
        </p>
      );
    })
    return lunchElement;
  }

  render() {
    return (
      <div>
        {this.props.menuname === 'Desayuno' ? this.breakfast() : ''}
        {this.props.menuname === 'Resto del día' ? this.lunch() : ''}
      </div>
    );
  }
}

export default ComponentVisualMenuOptions;
