/* eslint-disable no-undef */
import * as actions from '../waiter';
import * as types from '../actionTypes';

describe('actions', () => {
  it('Crear la acción de agregar un producto ', () => {
    const product = 'ADD_TO_BILL';
    const expectedAction = {
      type: types.ADD_TO_BILL,
      product,
    };
    expect(actions.addProductToOrder(product)).toEqual(expectedAction);
  });

  it('Crear la acción de eliminar un producto ', () => {
    const index = 'product';
    const expectedAction = {
      type: types.DELETE_TO_BILL,
      index,
    };
    expect(actions.deleteProductToOrder(index)).toEqual(expectedAction);
  });

  it('Crear la acción de limpiar el pedido ', () => {
    const product = 'product';
    const expectedAction = {
      type: types.CLEAN_TO_BILL,
      product,
    };
    expect(actions.cleanProductToOrder(product)).toEqual(expectedAction);
  });
});
