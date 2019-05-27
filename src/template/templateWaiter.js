import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';
import ComponentVisualMenuOptions from '../componentsVisual/componentVisualMenuOptions';
import ComponentVisualModal from '../componentsVisual/componentVisualModal';

class TemplateWaiter extends Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
    this.addProduct = this.addProduct.bind(this);
    this.modalRef = React.createRef();
  }

  addProduct(product) {
    // Estructura que permite abrir y cerrar modal de ser necesario
    if (Array.isArray(product) && product[0].types) {
      ReactDOM.render(
        <ComponentVisualModal types={product[0].types} toppings={product[0].toppings} ref={this.modalRef} />,
        document.getElementById('modaldiv'),
      );
      this.modalRef.current.handleShow();
    }
  }

  showMenu(menuname, addFunction) {
    ReactDOM.render(<ComponentVisualMenuOptions menuname={menuname} onAddProduct={this.addProduct} />, document.getElementById('menuoptions'));
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
          </div>
        </div>
      </div>
    );
  }
}

export default TemplateWaiter;
