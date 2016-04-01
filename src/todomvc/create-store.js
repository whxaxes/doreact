import { createStore, combineReducers } from "redux";
import * as reducers from "./reducers";

export default function () {
	var reducer = combineReducers(reducers);
	var store = createStore(reducer);

  return store;
}