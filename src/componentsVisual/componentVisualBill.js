/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualBill.css';

class ComponentVisualBill extends Component {
  render() {
    return (
      <>
        <div>
          <h5>Resumen del Pedido</h5>
          {this.props.ordersFromStore.orders.map(product => (
            <div className="productsorder row border">
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
                key="btn"
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

const mapStateToProps = state =>
  // ...state,
  ({ ordersFromStore: state.orders });

export default connect(
  mapStateToProps,
)(ComponentVisualBill);
