import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';
import ComponentVisualMenuOptions from '../componentsVisual/componentVisualMenuOptions';
import ComponentVisualModal from '../componentsVisual/componentVisualModal';
import ComponentVisualBill from '../componentsVisual/componentVisualBill';

class TemplateWaiter extends Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.modalRef = React.createRef();
    this.state = {
      "products" : []
    }
  }

  addProduct(product) {
    // Estructura que permite abrir y cerrar modal de ser necesario
    console.log("Producto a añadir: " + JSON.stringify(product));
    if (Array.isArray(product) && product[0].types) {
      ReactDOM.render(
        <ComponentVisualModal types={product[0].types} toppings={product[0].toppings} 
         product={product[0].product} subproduct={product[1].product} ref={this.modalRef}/>,
        document.getElementById('modaldiv'),
      );
      this.modalRef.current.handleShow();
    }
    else {
      this.addProductBill(product);
    }
  }

  showMenu(menuname, addFunction) {
    ReactDOM.render(<ComponentVisualMenuOptions menuname={menuname} onAddProduct={this.addProduct} />, document.getElementById('menuoptions'));
  }

  addProductBill(product){
    console.log(JSON.stringify(product));
    let bill = this.state.products;
    bill.push(product);
    this.setState({
      "products":bill
    })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5>Ingrese la orden</h5>
            <ComponentVisualButton name="Desayuno" buttonOnClick={evt => this.showMenu('Desayuno', this.add, evt)} />
            <ComponentVisualButton name="Resto del día" buttonOnClick={evt => this.showMenu('Resto del día', this.add, evt)} />
            <div id="menuoptions" />
          </div>
          <div className="col-sm">
            <h5>Resumen Pedido</h5>
            <ComponentVisualBill products = {this.state.products} />
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateWaiter;
