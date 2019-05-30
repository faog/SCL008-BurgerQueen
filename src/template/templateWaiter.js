/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';
import ComponentVisualMenuOptions from '../componentsVisual/componentVisualMenuOptions';
import ComponentVisualModal from '../componentsVisual/componentVisualModal';
import ComponentVisualBill from '../componentsVisual/componentVisualBill';
import './css/templateWaiter.css';

class TemplateWaiter extends Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.addProductToBill = this.addProductToBill.bind(this);
    this.deleteProductFromBill = this.deleteProductFromBill.bind(this);
    this.saveBill = this.saveBill.bind(this);
    this.clearBill = this.clearBill.bind(this);
    this.modalRef = React.createRef();
    this.state = {
      products: [],
    };
  }

  addProduct(product) {
    if (Array.isArray(product) && product[0].types) {
      ReactDOM.render(
        // Estructura que permite abrir y cerrar modal de ser necesario
        <ComponentVisualModal
          types={product[0].types}
          toppings={product[0].toppings}
          product={product[0].product}
          subproduct={product[1].product}
          price={product[1].price}
          onAddToBill={this.addProductToBill}
          ref={this.modalRef}
        />,
        document.getElementById('modaldiv'),
      );
      this.modalRef.current.handleShow();
    } else {
      this.addProductToBill(product);
    }
  }

  showMenu(menuname) {
    ReactDOM.render(<ComponentVisualMenuOptions menuname={menuname} onAddProduct={this.addProduct} />, document.getElementById('menuoptions'));
  }

  addProductToBill(product) {
    const bill = this.state.products;
    if (Array.isArray(product)) {
      const flatProduct = {
        product: product[0].product,
        size: product[1].product,
        price: product[1].price,
      };
      bill.push(flatProduct);
    } else {
      bill.push(product);
    }
    this.setState({
      products: bill,
    });
  }

  deleteProductFromBill(index) {
    const bill = this.state.products;
    bill.splice(index, 1);
    this.setState({
      products: bill,
    });
  }

  saveBill() {
    const customername = document.getElementById('customername').value;
    this.props.firebase.saveBill(this.state.products, customername).then(() => {
      alert('Enviado con éxito');
      // Limpiar el pedido
      this.clearBill();
    }).catch((error) => {
      alert(`Error: ${error}`);
    });
  }

  clearBill() {
    document.getElementById('customername').value = '';
    this.setState({ products: [] });
  }

  render() {
    return (
      <div className="row">
        <section className="col-sm">
          <h5>Ingrese la orden</h5>
          <ComponentVisualButton name="Desayuno" className="btnbreakfast m-1" buttonOnClick={evt => this.showMenu('Desayuno', evt)} />
          <ComponentVisualButton name="Almuerzo/Cena" className="btnlunch-dinner m-1" buttonOnClick={evt => this.showMenu('Resto del día', evt)} />
          <div id="menuoptions" />
        </section>
        <section className="col-sm">
          <h5>Resumen Pedido</h5>
          <ComponentVisualBill
            products={this.state.products}
            onDeleteProduct={this.deleteProductFromBill}
            onSaveBill={this.saveBill}
            onClearBill={this.clearBill}
          />
        </section>
      </div>
    );
  }
}

export default TemplateWaiter;
