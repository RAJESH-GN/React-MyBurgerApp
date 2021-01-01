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

export const fetchStart = () => {
  return {
    type: ActionType.ORDER_FETCH_START,
  };
};

export const fetchSuccess = (orders) => {
  return {
    type: ActionType.ORDER_FETCH_SUCCESS,
    orders: orders,
  };
};
export const fetchFailed = (error) => {
  return {
    type: ActionType.ORDER_FETCH_FAILED,
    error: error,
  };
};

export const fetchOrderDetails = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("/order.json")
      .then((res) => {
        const orders = [];
        for (let orderid in res.data) {
          orders.push({ ...res.data[orderid], id: orderid });
        }
        dispatch(fetchSuccess(orders));
      })
      .catch((err) => dispatch(fetchFailed(err)));
  };
};
