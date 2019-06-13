/* eslint-disable react/sort-comp */
/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';

class TemplateDelivery extends Component {
  constructor(props, context) {
    super(props);
    this.deliverOrder = this.deliverOrder.bind(this);
    this.state = {
      orders: [],
    };
  }

  deliverOrder(orderId) {
    console.log(`Entregando order ${orderId}`);
    this.props.firebase.deliverOrder(orderId)
      .then(() => {
      // Traer nuevamente los datos
        this.props.firebase.getOrdersByState('Completa')
          .then((orders) => {
            this.setState({ orders });
          });
      }).catch((error) => {
        console.log(`error completando orden: ${error}`);
      });
  }

  render() {
    return (
      <>
        <h1>Entrega</h1>
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
            <div className="row">
            Hora de completacion:
              {' '}
              {order.timeCompleteOrder.toDate().toLocaleDateString()}
              {' '}
              {order.timeEnterOrder.toDate().toLocaleTimeString()}
            </div>
            <ComponentVisualButton name="entregar" buttonOnClick={evt => this.deliverOrder(order.id, evt)} key={order.id} />
          </div>
        ))
      }
      </>
    );
  }

  // Luego que termina de crearse el componente, se deben rescatar los datos desde firebase
  componentDidMount() {
    this.props.firebase.getOrdersByState('Completa').then((orders) => {
      console.log(JSON.stringify(orders));
      this.setState({ orders });
    });
  }
}

export default TemplateDelivery;
