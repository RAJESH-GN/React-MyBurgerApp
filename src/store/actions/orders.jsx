import * as ActionType from "./actionsType";
import axios from "./../../axios-order";

export const purchaseInit = () => {
  return {
    type: ActionType.PURCHASING_INIT,
  };
};
export const purchasingStart = (orderDetails) => {
  return {
    type: ActionType.PURCHASING_START,
    orderDetails: orderDetails,
  };
};

export const purchaseFail = (error) => {
  return {
    type: ActionType.PURCHASE_FAIL,
    error: error,
  };
};

export const purchaseSuccess = (orderDetails) => {
  return {
    type: ActionType.PURCHASE_SUCCESS,
    orderDetails: orderDetails,
  };
};

export const createOrder = (orderDetails) => {
  return (dispatch) => {
    dispatch(purchasingStart(orderDetails));
    axios
      .post("/order.json", orderDetails)
      .then((res) => {
        dispatch(purchaseSuccess(res.data));
      })
      .catch((error) => dispatch(purchaseFail()));
  };
};
