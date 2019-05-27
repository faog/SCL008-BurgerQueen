import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualMenuOptions.css';

const menuFile = require('../data/menuBurgerQueen');

class ComponentVisualMenuOptions extends Component {
  constructor(props) {
    super(props);
    this.addProduct = this.addProduct.bind(this);
  }

  addProduct(product){
    this.props.onAddProduct(product);
  }
  
  breakfast() {
    const breakfastElement = menuFile.breakfast.map((product) => {
      return (
        <ComponentVisualButton name = {product.product} buttonOnClick={evt => {this.addProduct(product,evt)}} className="breakfast"/>
      )
    })
    return breakfastElement;
  }

  lunch() {
    const lunchElement = menuFile.lunch.map((category) => {
      return (
        <div key={category.categoryName}>
          {category.categoryName}
          {category.items.map((menuItem,index)=>{
            return (menuItem.size?
              <div key={menuItem.product}>
              {menuItem.product}
              {menuItem.size.map((size,sizeIndex)=>
                <ComponentVisualButton key={index+"_"+sizeIndex} name ={size.product} className="lunch" 
                buttonOnClick={evt => {this.addProduct([menuItem,size],evt)}} />
          )}
        </div>
        :<ComponentVisualButton key={index} name = {menuItem.product} className="lunch" 
        buttonOnClick={evt => {this.addProduct(menuItem,evt)}} />
              );
            })
          }
        </div>
      )
    });
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
