import React, {Component} from 'react';
import ComponentVisualRoleButton from '../componentsVisual/componentVisualRoleButton';

class ComponentFunctionsRoleButton extends Component {
    render(){
        const roles =["Mesero", "Cocinero"]
            return (                
                <div>
                    {roles.map(role=>
                        <ComponentVisualRoleButton role = {role}/>
                    )}
                </div>                
            );
    }
}

export default ComponentFunctionsRoleButton;