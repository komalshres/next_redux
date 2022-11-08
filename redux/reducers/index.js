import { combineReducers } from "redux";
import { productRecuder } from "./productReducer";

const reducers = combineReducers({
  allProducts: productRecuder,
});

export default reducers;
