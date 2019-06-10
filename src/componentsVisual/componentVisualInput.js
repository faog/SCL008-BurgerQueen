/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Form, Alert } from 'react-bootstrap';

class ComponentVisualInput extends Component {
  render() {
    return (
      <Form>
        <Form.Group>
          <Form.Label>{this.props.message}</Form.Label>
          <Form.Control onChange={evt => this.props.validate(evt)}></Form.Control>
          {this.props.error !== '' ? <Alert variant="warning">{this.props.error}</Alert> : ''}
        </Form.Group>
      </Form>
    );
  }
}

export default ComponentVisualInput;
