import { ActionTypes } from "../constant/action-types";

const { SET_PRODUCTS, SELECTED_PRODUCT } = ActionTypes;

export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  };
};

export const selectProduct = (products) => {
  return {
    type: SELECTED_PRODUCT,
    payload: products,
  };
};
