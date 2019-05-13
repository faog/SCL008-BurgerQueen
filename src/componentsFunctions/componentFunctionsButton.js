import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualButton from '../componentsVisual/componentVisualButton';
import ComponentVisualContainerWaiter from '../componentsVisual/componentVisualContainerWaiter';
import ComponentVisualContainerKitchen from '../componentsVisual/componentVisualContainerKitchen';
configure({ adapter: new Adapter() });

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
                <ComponentVisualButton name='Mesero' buttonOnClick={this.containerWaiter}/>
                <ComponentVisualButton name='Cocina' buttonOnClick={this.containerKitchen}/>
                <div id="containerrole"></div>  
            </div>
            
        )
    }
}

export default ComponentFunctionsButton;