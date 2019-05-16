import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';
import ComponentVisualMenuOptions from '../componentsVisual/componentVisualMenuOptions';

class TemplateWaiter extends Component {
  constructor(props) {
    super(props);
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu(menuname) {
    ReactDOM.render(<ComponentVisualMenuOptions menuname={menuname} />, document.getElementById('menuoptions'));
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h5>Ingrese la orden</h5>
            <ComponentVisualButton name="Desayuno" buttonOnClick={e => this.showMenu('Desayuno', e)} />
            <ComponentVisualButton name="Resto del día" buttonOnClick={e => this.showMenu('Resto del día', e)} />
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
