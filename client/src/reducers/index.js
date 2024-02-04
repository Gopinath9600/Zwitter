import { combineReducers } from "redux";
import authReducer from "./authReducer.js";
import postReducer from "./uploadReducer.js";

export const reducers = combineReducers({ authReducer, postReducer });
