/* eslint-disable react/sort-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualOrder from '../componentsVisual/componentVisualOrder';

class TemplateDelivery extends Component {
  render() {
    return (
      <>
        <h3>Pedidos listos para entregar</h3>
        <ComponentVisualOrder buttonName="Entregar pedido" state="Entregar" newState="Entregado" firebase={this.props.firebase} />
      </>
    );
  }
}

export default TemplateDelivery;
