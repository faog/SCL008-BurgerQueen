/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualOrder from '../componentVisualOrder';

configure({ adapter: new Adapter() });

describe('ComponentVisualorder', () => {
  it('Debería existir el componente <ComponentVisualOrder />', () => {
    const getOrdersByState = jest.fn();
    getOrdersByState.mockResolvedValue([{
      customername: 'Pedro', order: [{ price: 500, product: 'Café americano' }], state: 'Pendiente', timeEnterOrder: { seconds: 1560484458, nanoseconds: 200000000 }, id: 'NpRoNjSHrl4k507y6PR2'
    }]);
    const firebase = { getOrdersByState };
    const order = shallow(<ComponentVisualOrder firebase={firebase} />);
    expect(order.exists()).toBe(true);
  });
  /*
  it('Debería cambiar el estado del pedido', () => {
    const getOrdersByState = jest.fn();
    getOrdersByState.mockResolvedValue([{
      customername: 'Pedro', order: [{ price: 500, product: 'Café americano' }],
      state: 'Pendiente', timeEnterOrder: { toDate: () => Date() }, id: 'NpRoNjSHrl4k507y6PR2'
    }]);
    const firebase = { getOrdersByState };
    const stateChange = shallow(<ComponentVisualOrder firebase={firebase} />);
    stateChange.find('.btnstate').simulate('click');
    expect(stateChange.state);
  });
  */
});
