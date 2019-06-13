/* eslint-disable react/no-array-index-key */
/* eslint-disable no-unused-vars */
/* eslint-disable react/sort-comp */
/* eslint-disable no-console */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';

class TemplateKitchen extends Component {
  constructor(props, context) {
    super(props);
    this.completeOrder = this.completeOrder.bind(this);
    this.calculateOrderTime = this.calculateOrderTime.bind(this);
    this.state = {
      orders: [],
    };
  }

  completeOrder(orderId) {
    console.log(`Completando order ${orderId}`);
    this.props.firebase.completeOrder(orderId)
      .then(() => {
      // Traer nuevamente los datos
        this.props.firebase.getOrdersByState('Pendiente')
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
        <h1>Cocina</h1>
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
              Tiempo Transcurrido:
              {' '}
              {this.state.orderTime
                ? this.state.orderTime.filter(ot => ot.id === order.id)[0].time
                : ''}
            </div>
            <ComponentVisualButton name="completar" buttonOnClick={evt => this.completeOrder(order.id, evt)} key={order.id} />
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
      // Se inicia el contador
      this.calculateOrderTime();
    });
  }

  calculateOrderTime() {
    // Esto se ejecuta cada 1000ms (1 sec)
    setInterval(() => {
      const orderTime = [];
      this.state.orders.forEach((order) => {
        const orderDate = order.timeEnterOrder.toDate();
        // Se resta la fecha de la orden con la fecha actual para obtener los milisegundos
        // de diferencia, luego se dividen por 1000
        const secondsElapsed = Math.round((Date.now() - orderDate) / 1000);
        // Acá se convierte a Minutos : Segundos
        const minutesElapsed = Math.floor(secondsElapsed / 60);
        const secondsRemain = secondsElapsed % 60;
        orderTime.push({
          // Se formatea con un 0 al principio en caso que sean menos de 10 minutos o segundos
          time: `${minutesElapsed < 10 ? `0${minutesElapsed}` : minutesElapsed}:${
            secondsRemain < 10 ? `0${secondsRemain}` : secondsRemain}`,
          id: order.id,
        });
      });
      this.setState({
        orderTime,
      });
    }, 1000);
  }
}

export default TemplateKitchen;
