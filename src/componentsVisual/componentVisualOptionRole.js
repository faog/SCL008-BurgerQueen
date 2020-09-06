/* eslint-disable consistent-return */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable class-methods-use-this */
import React, { Component } from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualButton from './componentVisualButton';
import TemplateWaiter from '../template/templateWaiter';
import TemplateKitchen from '../template/templateKitchen';
import TemplateDelivery from '../template/templateDelivery';
import { FirebaseContext } from '../data/firebase';
import './css/componentVisualOptionRole.css';

configure({ adapter: new Adapter() });

class ComponentVisualOptionRole extends Component {
  constructor(props, context) {
    super(props, context);
    this.containerKitchen = this.containerKitchen.bind(this);
    this.containerWaiter = this.containerWaiter.bind(this);
    this.containerDelivery = this.containerDelivery.bind(this);
    this.state = { function: '' };
  }

  containerWaiter() {
    this.setState({ function: 'waiter' });
  }

  containerKitchen() {
    this.setState({ function: 'kitchen' });
  }

  containerDelivery() {
    this.setState({ function: 'delivery' });
  }

  render() {
    return (
      <>
        <div className="roleoption">
          <ComponentVisualButton name="Mesero" className="btnnavbar m-2" id="btn-waiter" buttonOnClick={this.containerWaiter} />
          <ComponentVisualButton name="Cocina" className="btnnavbar m-2" id="btn-kitchen" buttonOnClick={this.containerKitchen} />
          <ComponentVisualButton name="Entrega" className="btnnavbar m-2" id="btn-delivery" buttonOnClick={this.containerDelivery} />

        </div>
        <div id="containerrole">
          <FirebaseContext.Consumer>
            {(firebase) => {
              if (this.state.function === 'kitchen') {
                return <TemplateKitchen firebase={firebase} />;
              }
              if (this.state.function === 'waiter') {
                return <TemplateWaiter firebase={firebase} />;
              }
              if (this.state.function === 'delivery') {
                return <TemplateDelivery firebase={firebase} />;
              }
            }}
          </FirebaseContext.Consumer>
        </div>
      </>
    );
  }
}

export default ComponentVisualOptionRole;
