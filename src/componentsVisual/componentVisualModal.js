import React, { Component } from 'react';
import { Button, Modal, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

class ComponentVisualModal extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.setBurgerTopping = this.setBurgerTopping.bind(this);
    this.setBurgerType = this.setBurgerType.bind(this);
    this.state = {
      show: false,
      product:{}
    };
  }

  handleClose() {
    this.setState({ 
      show: false 
    });
  }

  handleShow() {
    this.setState({ 
      show: true,
      product:{}
    });
  }

  handleAdd(){
    this.setState({
      show:false
    });
    console.log(this.state.product);
    if(this.state.product.product){
      this.props.onAddToBill(this.state.product);
    }
  }

  setBurgerType(type){
    this.setState({
      product:{
        product:this.props.product,
        size:this.props.subproduct,
        topping:this.state.product.topping,
        type:type,
        price:this.props.price
      }
    });
  }

  setBurgerTopping(topping,price){
    this.setState({
      product:{
        product:this.props.product,
        size:this.props.subproduct,
        topping:topping,
        type:this.state.product.type,
        price:this.props.price + price
      }
    });
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
                key={burgertype} onClick={evt=>this.setBurgerType(burgertype,evt)}>
                  {burgertype}
                </ToggleButton>
              )
            })}
          </ToggleButtonGroup>

          <div className="row">Agregados</div>
          <div className="row m-1">
            <ToggleButtonGroup className="row mt-3" name="toppingsgroup">
              <ToggleButton type="radio" name="toppingsradio" className="m-1" variant="primary"
              value="" key="notopping" defaultChecked onClick={evt=>this.setBurgerTopping("",0,evt)}>
                Ninguno
              </ToggleButton>
              {this.props.toppings.map((topping)=>{
                return (
                  <ToggleButton type="radio" name="toppingsradio" className="m-1" variant="primary"
                  value={topping.product} key={this.props.product+"_"+topping.product}
                  onClick={evt=>this.setBurgerTopping(topping.product,topping.price,evt)}>
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
          <Button variant="primary" onClick={this.handleAdd}>
            Agregar
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default ComponentVisualModal;  
