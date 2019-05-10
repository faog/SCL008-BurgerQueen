import React, {Component} from 'react';
import ComponentVisualNav from'./componentsVisual/componentVisualNav';
import ComponentFuntionsRoleButton from './componentsFunctions/componentFunctionsRoleButton'
import './App.css';

class App extends Component {
    render(){
        return (  
            <div>
                <ComponentVisualNav />   
                <ComponentFuntionsRoleButton />  
            </div> 
        );
    }
}

export default App;