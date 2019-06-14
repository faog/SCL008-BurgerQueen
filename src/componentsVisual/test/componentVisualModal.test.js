/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import { configure, mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../redux/store';
import ComponentVisualModal from '../componentVisualModal';

configure({ adapter: new Adapter() });

describe('ComponentVisualModal', () => {
  it('Debería existir el componente <ComponentVisualModal />', () => {
    const modal = shallow(<ComponentVisualModal />);
    expect(modal.exists()).toBe(true);
  });
  /*
  it('Debería enviar el pedido a cocina', () => {
    const topping = mount(<Provider store={store}><ComponentVisualModal /></Provider>);
    topping.find('.toppings').find('.map').simulate('click');
    expect(topping.state.topping.product);
  });
  */
});
