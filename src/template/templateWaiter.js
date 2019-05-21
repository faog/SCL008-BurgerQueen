import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';
import ComponentVisualMenuOptions from '../componentsVisual/componentVisualMenuOptions';

class TemplateWaiter extends Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
  }

  add(e){
    //Estructura que permite abrir y cerrar modales
    alert(JSON.stringify(e));
  }

  showMenu(menuname, addFunction) {
    ReactDOM.render(<ComponentVisualMenuOptions menuname={menuname} onAdd={this.add}/>, document.getElementById('menuoptions'));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5>Ingrese la orden</h5>
            <ComponentVisualButton name="Desayuno" buttonOnClick={e => this.showMenu('Desayuno',this.add, e)} />
            <ComponentVisualButton name="Resto del día" buttonOnClick={e => this.showMenu('Resto del día',this.add, e)} />
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
