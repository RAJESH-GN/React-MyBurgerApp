import * as ActionType from "./../actions/actionsType";

const initialState = {
  order: [],
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
        loading: false,
        purchased: true,
      };
    case ActionType.PURCHASE_FAIL:
      return {
        ...state,
        loading: false,
      };
    case ActionType.ORDER_FETCH_START:
      return {
        ...state,
        loading: true,
      };
    case ActionType.ORDER_FETCH_SUCCESS:
      return {
        ...state,
        order: state.order.concat(action.orders),
        loading: false,
      };
    case ActionType.ORDER_FETCH_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
