/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';
import store from '../store';
import './css/componentVisualMenuOptions.css';

const menuFile = require('../data/menuBurgerQueen');

class ComponentVisualMenuOptions extends Component {
  constructor() {
    super();
    this.addProduct = this.addProduct.bind(this);
    this.state = menuFile;
  }

  addProduct(product) {
    store.dispatch({
      type: 'ADD_TO_BILL',
      product,
    });
  }

  breakfast() {
    const breakfastElement = this.state.breakfast.map(product => (
      <ComponentVisualButton
        name={product.product}
        buttonOnClick={(evt) => {
          this.addProduct(product, evt);
        }}
        className="breakfast"
        key={product.product}
      />
    ));
    return breakfastElement;
  }

  lunch() {
    const lunchElement = this.state.lunch.map(category => (
      <div key={category.categoryName}>
        <h6>{category.categoryName}</h6>
        {category.items.map((menuItem, index) => (
          menuItem.size
            ? (
              <div key={menuItem.product}>
                <p>{menuItem.product}</p>
                {menuItem.size.map((size, sizeIndex) => (
                  <ComponentVisualButton
                    key={`${index}_${sizeIndex}`}
                    name={size.product}
                    className="lunch m-1"
                    buttonOnClick={(evt) => { this.addProduct([menuItem, size], evt); }}
                  />
                ))}
              </div>
            )
            : (
              <ComponentVisualButton
                key={index}
                name={menuItem.product}
                className="lunch m-1"
                buttonOnClick={(evt) => { this.addProduct(menuItem, evt); }}
              />
            )
        ))}
      </div>
    ));
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
