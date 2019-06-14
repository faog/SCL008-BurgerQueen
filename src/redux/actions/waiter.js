/* eslint-disable import/prefer-default-export */
import { ADD_TO_BILL, DELETE_TO_BILL, CLEAN_TO_BILL } from './actionTypes';

export const addProductToOrder = product => ({
  type: ADD_TO_BILL,
  order: product,
});

export const deleteProductToOrder = index => ({
  type: DELETE_TO_BILL,
  index,
});

export const cleanProductToOrder = dispatch => (product) => {
  dispatch({
    type: CLEAN_TO_BILL,
    order: product,
  });
};
