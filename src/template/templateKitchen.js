/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualOrder from '../componentsVisual/componentVisualOrder';

class TemplateKitchen extends Component {
  render() {
    return (
      <>
        <h1>Pedidos a realizar</h1>
        <ComponentVisualOrder buttonName="Completar" state="Pendiente" firebase={this.props.firebase} />
      </>
    );
  }
}

export default TemplateKitchen;
