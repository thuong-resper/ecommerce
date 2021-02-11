import {
  CART_ADD_ITEM,
  CART_REMOVE_ITEM,
  CART_REMOVE_ALL_ITEMS,
  DECREASE_ONE_ITEM,
} from "../../constants/cartConstants";
import axios from "axios";

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`);
  dispatch({
    type: CART_ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      image: data.image,
      price: data.price,
      countInStock: data.countInStock,
      sale: data.sale,
      priceCompare: data.priceCompare,
      qty,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const removeAllCart = (filters) => (dispatch, getState) => {
  dispatch({
    type: CART_REMOVE_ALL_ITEMS,
    payload: filters,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const decreaseOneItem = (id) => (dispatch, getState) => {
  dispatch({
    type: DECREASE_ONE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

export const increaseOneItem = (id) => (dispatch, getState) => {
  dispatch({
    type: DECREASE_ONE_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};