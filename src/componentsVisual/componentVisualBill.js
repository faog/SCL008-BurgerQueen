/* eslint-disable template-curly-spacing */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class ComponentVisualBill extends Component {
  constructor(props, context) {
    super(props, context);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct(index) {
    this.props.onDeleteProduct(index);
  }

  render() {
    return (
      <div>
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
    );
  }
}

export default ComponentVisualBill;
