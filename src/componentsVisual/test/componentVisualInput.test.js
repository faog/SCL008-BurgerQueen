/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import { Form } from 'react-bootstrap';
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualInput from '../componentVisualInput';

configure({ adapter: new Adapter() });

describe('ComponentVisualInput', () => {
  it('Debería existir el componente <ComponentVisualInput />', () => {
    const form = shallow(<ComponentVisualInput />);
    expect(form.exists()).toBe(true);
  });

  it('debería llamar a onChange al ingresar un texto en el input', () => {
    const mockFn = jest.fn();
    const input = shallow(<Form.Control
      value=""
      onChange={mockFn}
    />);

    input
      .find('input')
      .simulate('change', 'matched');
    expect(mockFn.mock.calls[0][0]).toBe('matched');
  });
});
