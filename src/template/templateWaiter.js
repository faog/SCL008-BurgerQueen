/* eslint-disable no-alert */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
import React, { Component } from 'react';
import ComponentVisualMenuOptions from '../componentsVisual/componentVisualMenuOptions';
import ComponentVisualBill from '../componentsVisual/componentVisualBill';
import './css/templateWaiter.css';

class TemplateWaiter extends Component {
  render() {
    return (
      <div className="row">
        <section className="col-sm">
          <ComponentVisualMenuOptions />
        </section>
        <section className="col-sm">
          <ComponentVisualBill firebase={this.props.firebase} />
        </section>
      </div>
    );
  }
}

export default TemplateWaiter;
