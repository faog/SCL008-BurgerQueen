/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualOrder from '../componentsVisual/componentVisualOrder';
import './css/templateKitchen.css';

class TemplateKitchen extends Component {
  render() {
    return (
      <>
        <h3>Pedidos a realizar</h3>
        <ComponentVisualOrder buttonName="Completar pedido" state="Pendiente" firebase={this.props.firebase} />
      </>
    );
  }
}

export default TemplateKitchen;
