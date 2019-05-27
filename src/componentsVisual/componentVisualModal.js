import React, { Component } from 'react';
import { Button, Modal, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class ComponentVisualModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
      <Modal show={this.state.show} onHide={this.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.product} {this.props.subproduct}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">Tipos de {this.props.product}</div>
          <ToggleButtonGroup className="row mt-3" name="typesgroup">
            {this.props.types.map((burgertype)=>{
              return (
                <ToggleButton type="radio" name="typesradio" className="m-1" variant="primary" value={burgertype} 
                key={burgertype}>
                  {burgertype}
                </ToggleButton>
              )
            })}
          </ToggleButtonGroup>

          <div className="row">Agregados</div>
          <div className="row m-1">
            <ToggleButtonGroup className="row mt-3" name="toppingsgroup">
              <ToggleButton type="radio" name="toppingsradio" className="m-1" variant="primary"
              value="" key="notopping" defaultChecked>
                Ninguno
              </ToggleButton>
              {this.props.toppings.map((topping)=>{
                return (
                  <ToggleButton type="radio" name="toppingsradio" className="m-1" variant="primary"
                  value={topping.product} key={this.props.product+"_"+topping.product}>
                    {topping.product}
                  </ToggleButton>
                )
              })}
            </ToggleButtonGroup>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Cancelar
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ComponentVisualModal;  
