/* eslint-disable no-undef */
import * as actions from '../waiter';
import * as types from '../actionTypes';

describe('action', () => {
  it('test', () => {
    const product = {
      product: 'Cafe',
      price: 1000,
    };
    const expectedAction = {
      type: types.ADD_TO_BILL,
      order: product,
    };
    const retFunc = actions.addProductToOrder(product);
    retFunc((receivedAction) => {
      expect(receivedAction).toEqual(expectedAction);
    });
  });/*

  it('Crear la acción de agregar un producto ', () => {
    const myMock = jest.fn(() => (
      { product: 'Cafe', type: 'ADD_TO_BILL' }));
    console.log(myMock());
    const product = 'Cafe';
    const expectedAction = {
      type: types.ADD_TO_BILL,
      product,
    };
    actions.addProductToOrder(myMock.mock.calls)({
      type: types.ADD_TO_BILL,
      product: 'Cafe',
    });

    expect(myMock.call(expectedAction));
  }); */
/*
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
  */
});
