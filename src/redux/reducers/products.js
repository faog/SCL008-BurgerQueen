import { ADD_TO_BILL } from '../actions/actionTypes';

export default (
  state = {
    products: [],
  },
  action,
) => {
  switch (action.type) {
    case ADD_TO_BILL:
      return {
        ...state,
        products: state.cart.concat(action.product),
      };
    default: return state;
  }
};
