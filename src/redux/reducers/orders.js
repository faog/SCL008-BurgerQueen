import { ADD_TO_BILL } from '../actions/actionTypes';

export default (
  state = {
    orders: [],
  },
  action,
) => {
  switch (action.type) {
    case ADD_TO_BILL:
      return {
        ...state,
        order: state.order.concat(action.product),
      };
    default: return state;
  }
};
