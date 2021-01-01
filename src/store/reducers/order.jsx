import * as ActionType from "./../actions/actionsType";

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.PURCHASING_INIT:
      return {
        ...state,
        purchased: false,
      };
    case ActionType.PURCHASING_START:
      return {
        ...state,
        loading: true,
      };
    case ActionType.PURCHASE_SUCCESS:
      return {
        ...state,
        orders: state.orders.concat(action.orders),
        loading: false,
        purchased: true,
      };
    case ActionType.PURCHASE_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
