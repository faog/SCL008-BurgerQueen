import React, { Component } from 'react';
import ComponentVisualNav from './componentsVisual/componentVisualNav';
import ComponentFuntionsButton from './componentsFunctions/componentFunctionsButton';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ComponentVisualNav />
        <ComponentFuntionsButton />
        <div id="modaldiv"></div>
      </div>
    );
  }
}

export default App;
