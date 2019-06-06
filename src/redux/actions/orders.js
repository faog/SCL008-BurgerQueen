/* eslint-disable import/prefer-default-export */
import { ADD_TO_BILL } from './actionTypes';

export const addProduct = dispatch => () => {
  dispatch({
    type: ADD_TO_BILL,
  });
};
