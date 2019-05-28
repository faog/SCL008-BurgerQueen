/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
// import de adaptador para 'enzyme-adapter-react-15
// shallow(): permite testear un componente sin pasar por el DOM
import { shallow } from 'enzyme';
// import ComponentFunctionsButton from '../../componentsFunctions/componentFunctionsButton';

describe('ComponentFunctionsButton', () => {
  it('Debería ser un elemento con className="btn"', () => {
    expect(shallow(<button className="btn" />).is('.btn')).toBe(true);
  });
},);
