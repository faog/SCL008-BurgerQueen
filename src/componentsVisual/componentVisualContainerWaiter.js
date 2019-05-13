import React, {Component} from 'react';
import ComponentVisualButton from './componentVisualButton';

class ComponentVisualContainerWaiter extends Component{
    render(){
        return(    
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <h5>Ingrese la orden</h5>
                        <ComponentVisualButton name='Desayuno'/> 
                        <ComponentVisualButton name='Resto del día'/>                     
                    </div>  
                    <div className="col-sm">
                        <h5>Resumen Pedido</h5>
                    </div>              
                </div>   
            </div>    
        )
    }
}

export default ComponentVisualContainerWaiter;