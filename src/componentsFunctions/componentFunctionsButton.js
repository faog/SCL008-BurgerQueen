import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';
import TemplateWaiter from '../template/templateWaiter';
import TemplateKitchen from '../template/templateKitchen';

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
      <div>
        <ComponentVisualButton name="Mesero" buttonOnClick={this.containerWaiter} />
        <ComponentVisualButton name="Cocina" buttonOnClick={this.containerKitchen} />
        <div id="containerrole" />
      </div>

    );
  }
}

export default ComponentFunctionsButton;
