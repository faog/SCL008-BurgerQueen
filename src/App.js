import React, { Component } from 'react';
import ComponentFuntionsButton from './componentsFunctions/componentFunctionsButton';
import logo from './img/burger-queen.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <img src={logo} alt="Logo"/>
        </nav>        
      </header>      
        <ComponentFuntionsButton/>           
      <div id="modaldiv"></div>
      </>
    );
  }
}

export default App;
