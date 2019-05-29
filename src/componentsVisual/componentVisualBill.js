/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import './css/componentVisualBill.css';
import ComponentVisualButton from './componentVisualButton';

class ComponentVisualBill extends Component {
  constructor(props, context) {
    super(props, context);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.state = { validated: false };
  }

  handleSubmit(event) {
    const form = event.currentTarget;
    if (form.checkValidity() === true) {
      this.setState({ validated: true });
      event.preventDefault();
      event.stopPropagation();
      this.props.onSaveBill();
    } else {
      this.setState({ validated: false });
      event.preventDefault();
      event.stopPropagation();
    }
  }

  deleteProduct(index) {
    this.props.onDeleteProduct(index);
  }

  render() {
    const { validated } = this.state;
    return (
      <Form className="order row" noValidate validated={validated} onSubmit={evt => this.handleSubmit(evt)}>
        <div>
          <Form.Label>Nombre cliente:</Form.Label>
          <Form.Control required id="customername" className="customername" name="customername" placeholder="Ingrese el nombre del cliente" />
          <Form.Control.Feedback type="invalid">
            Debe ingresar un nombre de cliente
          </Form.Control.Feedback>
          {this.props.products.map((product, index) => (
            <div className=" row border" key={index}>
              <div className="productorder col-md-10 align-middle">
                {product.product}
                {' '}
                {product.size}
                {' '}
                {product.type}
                {product.topping && product.topping !== '' ? ` con ${product.topping}` : ''}
                $
                {product.price}
              </div>
              <ComponentVisualButton
                className="productdelete col-md-2"
                variant="outline-danger"
                size="sm"
                name="X"
                key={`btn ${index}`}
                buttonOnClick={evt => this.deleteProduct(index, evt)}
              />
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
