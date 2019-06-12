/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import { Form, Alert } from 'react-bootstrap';
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
    const input = shallow(<ComponentVisualInput
      value=""
      validate={mockFn}
    />);

    input
      .find(Form.Control)
      .simulate('change', 'matched');
    expect(mockFn.mock.calls[0][0]).toBe('matched');
  });

  it('debería mostrar un alert cuando se valida un error', () => {
    const input = shallow(<ComponentVisualInput
      value=""
      error="Error"
    />);
    expect(input.find(Alert).exists()).toBe(true);
    const inputNoError = shallow(<ComponentVisualInput
      value=""
      error=""
    />);
    expect(inputNoError.find(Alert).exists()).toBe(false);
  });
});
