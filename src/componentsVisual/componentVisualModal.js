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
                <ToggleButton type="radio" name="typesradio" className="m-1" variant="primary" value={burgertype} key={burgertype}>
                  {burgertype}
                </ToggleButton>
              )
            })}
          </ToggleButtonGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ComponentVisualModal;  
