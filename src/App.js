import React, { Component } from 'react';
import ComponentVisualOptionRole from './componentsVisual/componentVisualOptionRole';
import logo from './img/burger-queen.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <header>
          <nav className="navbar navbar-expand-lg navbar-light">
            <img src={logo} alt="Logo" />
          </nav>
        </header>
        <ComponentVisualOptionRole />
        <div id="modaldiv" />
      </>
    );
  }
}

export default App;
