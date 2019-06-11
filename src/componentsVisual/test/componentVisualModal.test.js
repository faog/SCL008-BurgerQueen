/* eslint-disable comma-dangle */
/* eslint-disable react/button-has-type */
/* eslint-disable no-undef */
import React from 'react';
import { configure, shallow } from 'enzyme';
// import de adaptador para 'enzyme-adapter-react-15
// shallow(): permite testear un componente sin pasar por el DOM
import Adapter from 'enzyme-adapter-react-16';
import ComponentVisualModal from '../componentVisualModal';

configure({ adapter: new Adapter() });

describe('ComponentVisualModal', () => {
  it('Debería existir el componente <ComponentVisualModal />', () => {
    const modal = shallow(<ComponentVisualModal />);
    expect(modal.exists()).toBe(true);
  });
});
