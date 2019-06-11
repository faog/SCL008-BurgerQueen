/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/sort-comp */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Button, Modal, ToggleButtonGroup, ToggleButton,
} from 'react-bootstrap';
import { addProductToOrder } from '../redux/actions/waiter';
import './css/componentVisualModal.css';

class ComponentVisualModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.setBurgerTopping = this.setBurgerTopping.bind(this);
    this.setBurgerType = this.setBurgerType.bind(this);
    this.state = {
      show: false,
      product: {},
    };
  }

  handleClose() {
    this.setState({
      show: false,
    });
  }

  handleShow() {
    this.setState({
      show: true,
      product: {},
    });
  }

  handleAdd() {
    this.setState({
      show: false,
    });
    if (this.state.product.product) {
      this.props.addProduct(this.state.product);
    }
  }

  setBurgerType(type) {
    this.setState({
      product: {
        product: this.props.product,
        size: this.props.subproduct,
        topping: this.state.product.topping,
        type,
        price: this.props.price,
      },
    });
  }

  setBurgerTopping(topping, price) {
    this.setState({
      product: {
        product: this.props.product,
        size: this.props.subproduct,
        topping,
        type: this.state.product.type,
        price: this.props.price + price,
      },
    });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.props.product}
            {' '}
            {this.props.subproduct}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalbody">
          <div className="row">
            <h5>
              Tipos de
              {' '}
              {this.props.product}
            </h5>
          </div>
          <ToggleButtonGroup className="row" name="typesgroup">
            {this.props.types.map(burgertype => (
              <ToggleButton
                type="radio"
                name="typesradio"
                className="burgertype m-1"
                variant="primary"
                value={burgertype}
                key={burgertype}
                onClick={evt => this.setBurgerType(burgertype, evt)}
              >
                {burgertype}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>

          <div className="row">
            <h5>
            Agregados
            </h5>
          </div>
          <div className="row m-1">
            <ToggleButtonGroup className="row" name="toppingsgroup">
              <ToggleButton
                type="radio"
                name="toppingsradio"
                className="toppings m-1"
                variant="primary"
                value=""
                key="notopping"
                defaultChecked
                onClick={evt => this.setBurgerTopping('', 0, evt)}
              >
                Ninguno
              </ToggleButton>
              {this.props.toppings.map(topping => (
                <ToggleButton
                  type="radio"
                  name="toppingsradio"
                  className="toppings m-1"
                  variant="primary"
                  value={topping.product}
                  key={`${this.props.product}_${topping.product}`}
                  onClick={evt => this.setBurgerTopping(topping.product, topping.price, evt)}
                >
                  {topping.product}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </Modal.Body>
        <Modal.Footer className="modalfooter">
          <Button variant="secondary" className="btnfootermodal" onClick={this.handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" className="btnfootermodal" onClick={this.handleAdd}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addProduct: addProductToOrder(dispatch),
});

const mapStateToProps = state => ({ ordersFromStore: state.orders });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true },
)(ComponentVisualModal);
