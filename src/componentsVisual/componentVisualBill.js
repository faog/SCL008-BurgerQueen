import React, { Component } from 'react';

class ComponentVisualBill extends Component {
  render(){
      return(
        <div>
            {this.props.products.map((product, index)=>{
                return(
                    <div className="row" key={index}>{JSON.stringify(product)}</div>
                )
            })}
        </div>
      )
  }
}

export default ComponentVisualBill;