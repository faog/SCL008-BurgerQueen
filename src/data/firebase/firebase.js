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
// (nombre del usuario, pedio, fecha de ingreso)
class Firebase {
  constructor() {
    app.initializeApp(config);
    this.db = app.firestore();
  }

    saveBill = (bill, customername) => {
      const billObject = {};
      billObject.customername = customername;
      billObject.bill = bill;
      billObject.timeEnterOrder = new Date(Date.now());
      return this.db.collection('kitchen').add(billObject);
    }
}

export default Firebase;
