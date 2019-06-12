/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import { configure, mount } from 'enzyme';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import store from '../../redux/store';
import ComponentVisualMenuOptions from '../componentVisualMenuOptions';

configure({ adapter: new Adapter() });

describe('ComponentVisualMenuOptions', () => {
  it('Debería existir el componente <ComponentVisualMenuOptions />', () => {
    const menu = mount(<Provider store={store}><ComponentVisualMenuOptions /></Provider>);
    expect(menu.exists()).toBe(true);
  });
  it('Debería mostrar el desayuno al clickear desayuno', () => {
    const menu = mount(<Provider store={store}><ComponentVisualMenuOptions /></Provider>);
    menu.find('.btnbreakfast').find('.btn').simulate('click');
    expect(menu.state.buttons);
  });
  it('Debería mostrar el almuerzo al clickear almuerzo', () => {
    const menu = mount(<Provider store={store}><ComponentVisualMenuOptions /></Provider>);
    menu.find('.btnlunch-dinner').find('.btn').simulate('click');
    expect(menu.state.buttons);
  });
/*     it('Probar modal',()=>{
       const mockApp = shallow(<Provider store={store}><ComponentVisualMenuOptions id="menu"/>
       <div id="modaldiv"></div></Provider>);
       const menu = mockApp.find({id:"menu"});
       console.log(menu);
       menu.instance().addProduct([{"product":"Hamburguesa",
       "types":["Pollo","Vacuno","Vegetariana"],
       "size":[{"product":"Simple","price":1500},{"product":"Doble","price":3500}],
       "toppings":[{"product":"Huevo","price":500},{"product":"Queso","price":500}]},
       {"product":"Simple","price":1500}]);
       expect(mockApp.find('#modaldiv').find(componentVisualModal)).exists();
   }) */
});
