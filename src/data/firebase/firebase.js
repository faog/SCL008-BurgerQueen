import app from 'firebase/app';
import 'firebase/firestore';

// Inicializacion del proyecto en firebase
const config = {
  apiKey: 'AIzaSyBDr79A7nPR2aeuHFselwbwxB4NYNsQIq0',
  authDomain: 'burger-queen-24hrs.firebaseapp.com',
  databaseURL: 'https://burger-queen-24hrs.firebaseio.com',
  projectId: 'burger-queen-24hrs',
  storageBucket: 'burger-queen-24hrs.appspot.com',
  messagingSenderId: '700510521328',
  appId: '1:700510521328:web:300ce1e0c6a2ee22',
};

// Crear clase Firebase, que permite guardar la información del pedido
// (nombre del usuario, pedido, fecha de ingreso)
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }

    sendToKitchen = (order, customername) => {
      const ordersObject = {};
      ordersObject.customername = customername;
      ordersObject.order = order;
      ordersObject.timeEnterOrder = new Date(Date.now());
      ordersObject.state = 'Pendiente';
      return this.db.collection('kitchen').add(ordersObject);
    }

    // Creo una nueva promesa, que me permita procesar toda la información antes de mostrarla
    getOrdersByState = state => new Promise((resolve, reject) => {
      // ordenes pendientes
      this.db.collection('kitchen').where('state', '==', state).orderBy('timeEnterOrder', 'desc').get()
        .then((querySnapshot) => {
          const orders = [];
          querySnapshot.forEach((order) => {
            const data = order.data();
            // Se añade para poder usarlo como llave, tanto para el map como para el borrado
            data.id = order.id;
            orders.push(data);
          });
          resolve(orders);
        })
        .catch((error) => {
          reject(error);
        });
    })

    orderChangeState = (orderId, newState) => this.db.collection('kitchen').doc(orderId).update({
      state: newState,
      timeCompleteOrder: new Date(Date.now()),
    })
}

export default Firebase;
