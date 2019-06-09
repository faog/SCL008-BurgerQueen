import { ADD_TO_BILL, DELETE_TO_BILL } from '../actions/actionTypes';

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
        orders: state.orders.concat(action.order),
      };
    case DELETE_TO_BILL:
      return {
        ...state,
        orders: state.orders.filter((product, index) => {
          if (action.index !== index) {
            return true;
          }
          return false;
        }),
      };
    default: return state;
  }
};
