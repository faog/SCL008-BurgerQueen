/* eslint-disable no-alert */
/* eslint-disable react/no-unused-state */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteProductToOrder, cleanProductToOrder } from '../redux/actions/waiter';
import ComponentVisualButton from './componentVisualButton';
import ComponentVisualInput from './componentVisualInput';
import './css/componentVisualBill.css';

class ComponentVisualBill extends Component {
  constructor(props) {
    super(props);
    this.state = { error: 'Debe ingresar nombre del cliente' };
    this.validateName = this.validateName.bind(this);
    this.sendToKitchen = this.sendToKitchen.bind(this);
    this.cleanProduct = this.cleanProduct.bind(this);
    this.totalValueProducts = this.totalValueProducts.bind(this);
    this.error = '';
  }

  deleteProduct(index) {
    this.props.deleteProduct(index);
  }

  validateName(evt) {
    // Al momento de validar, debe cambiar el error.
    // evt.target.value corresponde al valor en la caja de texto
    if (evt.target.value === '') {
      this.setState({ error: 'Debe ingresar nombre del cliente' });
      return;
    }
    // Validaciones adicionales
    this.setState({ error: '' });
  }

  cleanProduct() {
    this.props.cleanProduct();
  }

  sendToKitchen() {
    if (this.state.error === '') {
      alert('Pedido enviado a la cocina');
      // Agregar código de firebase
    }
  }

  totalValueProducts() {
    let total = 0;
    this.props.ordersFromStore.orders.forEach((product) => {
      total += product.price;
    });
    return total;
  }

  render() {
    return (
      <>
        <div>
          <h5>Resumen del Pedido</h5>
          <ComponentVisualInput message="Nombre:" validate={this.validateName} error={this.state.error} />
          {this.props.ordersFromStore.orders.map((product, index) => (
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
                buttonOnClick={(evt) => {
                  this.deleteProduct(index, evt);
                }}
              />
            </div>
          ))}
        </div>
        <p id="totalprice">
        Total:$
          {' '}
          {this.totalValueProducts()}
        </p>
        <div className="btnkitchen row">
          <ComponentVisualButton
            className="clean m-2"
            buttonOnClick={(evt) => {
              this.cleanProduct(evt);
            }}
            name="Limpiar"
          />
          <ComponentVisualButton
            buttonOnClick={(evt) => {
              this.sendToKitchen(evt);
            }}
            name="Enviar a Cocina"
          />
        </div>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  deleteProduct: deleteProductToOrder(dispatch),
  sendToKitchen: cleanProductToOrder(dispatch),
  cleanProduct: cleanProductToOrder(dispatch),
});

const mapStateToProps = state =>
  ({ ordersFromStore: state.orders });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ComponentVisualBill);
