/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
// import de adaptador para 'enzyme-adapter-react-15
// shallow(): permite testear un componente sin pasar por el DOM
import Adapter from 'enzyme-adapter-react-16';
import store from '../../redux/store';
import ComponentVisualBill from '../componentVisualBill';

configure({ adapter: new Adapter() });

describe('ComponentVisualBill', () => {
  it('Debería existir el componente <ComponentVisualBill />', () => {
    const bill = mount(<Provider store={store}><ComponentVisualBill /></Provider>);
    expect(bill.exists()).toBe(true);
  });

  it('Debería eliminar el producto del pedido', () => {
    const btndelete = mount(<Provider store={store}><ComponentVisualBill /></Provider>);
    btndelete.find('.productdelete').find('.btn').simulate('click');
    expect(btndelete.state.index);
  });

  it('Debería limpiar el pedido', () => {
    const clean = mount(<Provider store={store}><ComponentVisualBill /></Provider>);
    clean.find('.clean').find('.btn').simulate('click');
    expect(clean.state.ordersFromStore);
  });

  it('Debería enviar el pedido a cocina', () => {
    const send = mount(<Provider store={store}><ComponentVisualBill /></Provider>);
    send.find('.send').find('.btn').simulate('click');
    expect(send.state.ordersFromStore);
  });
});
