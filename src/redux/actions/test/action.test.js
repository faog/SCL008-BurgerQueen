/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import * as actions from '../waiter';
import * as types from '../actionTypes';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('actions', () => {
  it('Crear la acción de agregar un producto ', () => {
    const initialState = {};
    const store = mockStore(initialState);
    const product = {
      product: 'Cafe',
      price: 1000,
    };
    const expectedAction = {
      type: types.ADD_TO_BILL,
      order: product,
    };
    store.dispatch(actions.addProductToOrder(product));
    const actionsFromStore = store.getActions();
    expect(actionsFromStore).toEqual([expectedAction]);
  });
});
