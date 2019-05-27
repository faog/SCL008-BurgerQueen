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
    this.addProductToBill = this.addProductToBill.bind(this);
    this.deleteProductFromBill = this.deleteProductFromBill.bind(this);
    this.modalRef = React.createRef();
    this.state = {
      "products" : []
    }
  }

  addProduct(product) {
    // Estructura que permite abrir y cerrar modal de ser necesario
    if (Array.isArray(product) && product[0].types) {
      ReactDOM.render(
        <ComponentVisualModal types={product[0].types} toppings={product[0].toppings} 
         product={product[0].product} subproduct={product[1].product} price={product[1].price}
         onAddToBill={this.addProductToBill} ref={this.modalRef}/>,
        document.getElementById('modaldiv'),
      );
      this.modalRef.current.handleShow();
    }
    else {
      this.addProductToBill(product);
    }
  }

  showMenu(menuname) {
    ReactDOM.render(<ComponentVisualMenuOptions menuname={menuname} onAddProduct={this.addProduct} />, document.getElementById('menuoptions'));
  }

  addProductToBill(product){
    let bill = this.state.products;
    if(Array.isArray(product)){
      let flatProduct = {
        product:product[0].product,
        size:product[1].product,
        price:product[1].price
      }
      bill.push(flatProduct);
    }else{
      bill.push(product);
    }
    this.setState({
      "products":bill
    })
  }

  deleteProductFromBill(index){
    let bill = this.state.products;
    bill.splice(index, 1);
    this.setState({
      products:bill
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5>Ingrese la orden</h5>
            <ComponentVisualButton name="Desayuno" buttonOnClick={evt => this.showMenu('Desayuno', evt)} />
            <ComponentVisualButton name="Resto del día" buttonOnClick={evt => this.showMenu('Resto del día', evt)} />
            <div id="menuoptions" />
          </div>
          <div className="col-sm">
            <h5>Resumen Pedido</h5>
            <ComponentVisualBill products = {this.state.products} onDeleteProduct={this.deleteProductFromBill} />
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateWaiter;
