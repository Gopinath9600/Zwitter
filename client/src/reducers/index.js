import { combineReducers } from "redux";

import authReducer from "./authReducer";
import postReducer from "./uploadReducer";
import chatReducer from "./chatUserReducer";

export const reducers = combineReducers({
  authReducer,
  postReducer,
  chatReducer,
});
