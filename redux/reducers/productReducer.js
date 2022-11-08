import { ActionTypes } from "../constant/action-types";

const initialState = {
  products: [],
};

export const productRecuder = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return { ...state, products: payload };
    default:
      return state;
  }
};
