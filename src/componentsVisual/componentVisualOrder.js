/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';
import './css/componentVisualOrder.css';

class ComponentVisualOrder extends Component {
  constructor(props, context) {
    super(props);
    this.changeStateOrder = this.changeStateOrder.bind(this);
    this.state = {
      orders: [],
    };
  }

  changeStateOrder(orderId) {
    console.log(`Completando orden ${orderId}`);
    this.props.firebase.orderChangeState(orderId, this.props.newState)
      .then(() => {
      // Traer nuevamente los datos
        this.props.firebase.getOrdersByState(this.props.state)
          .then((orders) => {
            this.setState({ orders });
          });
      }).catch((error) => {
        console.log(`error completando la orden: ${error}`);
      });
  }

  render() {
    return (
      <>
        {
        this.state.orders.map(order => (
          <div className="boxorder" key={order.id}>
            <div className="boxelement">
              <div className="row">
            Cliente:
                {' '}
                {order.customername}
              </div>
              <div className="row">Productos:</div>
              {order.order.map((product, index) => (
                <div className="boxproduct" key={index}>
                  {product.product}
                  {' '}
                  {product.size}
                  {' '}
                  {product.type}
                  {' '}
                  {product.topping}
                  {' '}
                $
                  {product.price}
                </div>
              ))}
              <div className="row">
              Hora de ingreso:
                {' '}
                {order.timeEnterOrder.toDate().toLocaleDateString()}
                {' '}
                {order.timeEnterOrder.toDate().toLocaleTimeString()}
              </div>
            </div>
            <div className="boxbutton">
              <ComponentVisualButton
                name={this.props.buttonName}
                buttonOnClick={evt => this.changeStateOrder(order.id, this.props.state, evt)}
                key={order.id}
                className="btnstate"
              />
            </div>

          </div>
        ))
      }
      </>
    );
  }

  // Luego que termina de crearse el componente, se deben rescatar los datos desde firebase
  componentDidMount() {
    this.props.firebase.getOrdersByState(this.props.state).then((orders) => {
      this.setState({ orders });
    });
  }
}

export default ComponentVisualOrder;
