/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualButton from './componentVisualButton';

class ComponentVisualOrder extends Component {
  constructor(props, context) {
    super(props);
    this.completeOrder = this.completeOrder.bind(this);
    this.state = {
      orders: [],
    };
  }

  completeOrder(orderId, state) {
    console.log(`Completando orden ${orderId}`);
    this.props.firebase.completeOrder(orderId)
      .then(() => {
      // Traer nuevamente los datos
        this.props.firebase.getOrdersByState(state)
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
          <div key={order.id}>
            <div className="row">
            Cliente:
              {' '}
              {order.customername}
            </div>
            <div className="row">Productos:</div>
            {order.order.map((product, index) => (
              <div key={index}>
                {product.product}
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
            <ComponentVisualButton
              name={this.props.buttonName}
              buttonOnClick={evt => this.completeOrder(order.id, this.props.state, evt)}
              key={order.id}
            />
          </div>
        ))
      }
      </>
    );
  }

  // Luego que termina de crearse el componente, se deben rescatar los datos desde firebase
  componentDidMount() {
    this.props.firebase.getOrdersByState('Pendiente').then((orders) => {
      this.setState({ orders });
    });
  }
}

export default ComponentVisualOrder;
