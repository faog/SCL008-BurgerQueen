/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';
import TemplateWaiter from '../template/templateWaiter';
import TemplateKitchen from '../template/templateKitchen';
import './css/componentFunctionsButton.css';

configure({ adapter: new Adapter() });

class ComponentFunctionsButton extends Component {
  containerWaiter() {
    ReactDOM.render(<TemplateWaiter />, document.getElementById('containerrole'));
  }

  containerKitchen() {
    ReactDOM.render(<TemplateKitchen />, document.getElementById('containerrole'));
  }

  render() {
    return (
      <>
        <div className="roleoption">
          <ComponentVisualButton name="Mesero" className="btnnavbar m-2" buttonOnClick={this.containerWaiter} />
          <ComponentVisualButton name="Cocina" className="btnnavbar m-2" buttonOnClick={this.containerKitchen} />
        </div>
        <div id="containerrole" />
      </>
    );
  }
}

export default ComponentFunctionsButton;
