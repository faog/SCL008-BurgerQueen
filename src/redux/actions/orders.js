/* eslint-disable import/prefer-default-export */
import { ADD_TO_BILL } from './actionTypes';

export const addProductToOrder = dispatch => (product) => {
  dispatch({
    type: ADD_TO_BILL,
    order: product,
  });
};
