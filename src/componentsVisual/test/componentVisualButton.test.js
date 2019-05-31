/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
// import de adaptador para 'enzyme-adapter-react-15
// shallow(): permite testear un componente sin pasar por el DOM
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualButton from '../componentVisualButton';

configure({ adapter: new Adapter() });

const clickFn = jest.fn();
describe('ComponentVisualButton', () => {
  it('Debería ser un elemento con className="btn"', () => {
    expect(shallow(<ComponentVisualButton className="btn" />).is('.btn')).toBe(true);
  });

  it('debería llamar al evento buttonOnclick', () => {
    const component = shallow(<ComponentVisualButton buttonOnClick={clickFn} className="btn" />);
    component
      .find('.btn')
      .simulate('click');
    expect(clickFn).toHaveBeenCalled();
  });
});
