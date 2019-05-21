import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualMenuOptions.css';

const menuFile = require('../data/menuBurgerQueen');

class ComponentVisualMenuOptions extends Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
  }

  add(e){
    this.props.onAdd(e);
  }
  
  breakfast() {
    const breakfastElement = menuFile.breakfast.map((menuItem) => {
      return (
        <ComponentVisualButton name = {menuItem.product} buttonOnClick={e => {this.add(menuItem,e)}} className="breakfast"/>
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
              {menuItem.size.map((size,sizeIndex)=>
                <ComponentVisualButton key={index+"_"+sizeIndex} name ={size.product} className="lunch" buttonOnClick={e => {this.add([menuItem,size],e)}} />
          )}
        </div>
        :       <ComponentVisualButton key={index} name = {menuItem.product} className="lunch" buttonOnClick={e => {this.add(menuItem,e)}} />
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
