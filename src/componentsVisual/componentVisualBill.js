/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
// import store from '../store';
import { Button } from 'react-bootstrap';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualBill.css';

class ComponentVisualBill extends Component {
  constructor() {
    super();
    this.state = {
      order: [],
    };
  }

  render() {
    return (
      <>
        <div>
          <h5>Resumen del Pedido</h5>
          {this.state.order.map((product, index) => (
            <div className="productsorder row border" key={index}>
              <div className="productorder col-md-10 align-middle mb-2">
                {product.product}
                {' '}
                {product.size}
                {' '}
                {product.type}
                {product.topping && product.topping !== '' ? ` con ${product.topping} ` : ' '}
                $
                {product.price}
              </div>
              <ComponentVisualButton
                className="productdelete col-md-2"
                variant="outline-danger"
                size="sm"
                name="X"
                key={`btn ${index}`}
              />
            </div>
          ))}
        </div>
        <div className="btnkitchen row">
          <ComponentVisualButton className="clean m-2" name="Limpiar" />
          <Button type="submit">Enviar a cocina</Button>
        </div>
      </>
    );
  }
}

export default ComponentVisualBill;
