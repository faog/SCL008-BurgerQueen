import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';
import ComponentVisualContainerWaiter from '../componentsVisual/componentVisualContainerWaiter';
import ComponentVisualContainerKitchen from '../componentsVisual/componentVisualContainerKitchen';

class ComponentFunctionsButton extends Component {

    containerWaiter(){
        ReactDOM.render(<ComponentVisualContainerWaiter/>, document.getElementById('containerrole'));
    }

    containerKitchen(){
        ReactDOM.render(<ComponentVisualContainerKitchen/>, document.getElementById('containerrole'));
    }

    render(){
        return (
            <div>
                <ComponentVisualButton roles='Mesero' buttonOnClick={this.containerWaiter}/>
                <ComponentVisualButton roles='Cocina' buttonOnClick={this.containerKitchen}/>
                <div id="containerrole"></div>  
            </div>
            
        )
    }
}

export default ComponentFunctionsButton;