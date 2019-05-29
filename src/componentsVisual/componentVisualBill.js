/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './css/componentVisualBill.css';

class ComponentVisualBill extends Component {
  constructor(props, context) {
    super(props, context);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.state = { validated: false };
  }

  deleteProduct(index) {
    this.props.onDeleteProduct(index);
  }

  render() {
    const { validated } = this.state;
    return (
      <Form noValidate validate={validated} onSubmit={evt => this.handleSubmit(evt)}>
        <div className="row">
          <Form.Label>Nombre cliente:</Form.Label>
          <Form.Control required id="customername" name="customername" placeholder="Ingrese el nombre del cliente" />
          <Form.Control.Feedback type="invalid">
            Debe ingresar un nombre de cliente
          </Form.Control.Feedback>
          {this.props.products.map((product, index) => (
            <div className="row border" key={index}>
              <div className="col-md-11 align-middle">
                {product.product}
                {' '}
                {product.size}
                {' '}
                {product.type}
                {product.topping && product.topping !== '' ? ` con ${product.topping}` : ''}
                $
                {product.price}
                <Button
                  className="col-md-1 align-middle"
                  variant="outline-danger"
                  size="sm"
                  key={`btn ${index}`}
                  onClick={evt => this.deleteProduct(index, evt)}
                >
                  X
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <Button type="submit">Enviar a cocina</Button>
        </div>
      </Form>
    );
  }
}

export default ComponentVisualBill;
