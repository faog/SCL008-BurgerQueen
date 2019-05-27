import React, { Component } from 'react';
import { Button,Modal } from 'react-bootstrap';

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
               <Modal.Title>Modal heading</Modal.Title>
           </Modal.Header>
           <Modal.Body>
               {JSON.stringify(this.props.types)}<br/>
               {JSON.stringify(this.props.toppings)}
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
