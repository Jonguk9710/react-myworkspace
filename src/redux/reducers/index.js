import { combineReducers } from "redux";
import todo from "./todo";
import contact from "./contact";

const rootReducer = combineReducers({
  todo,
  contact,
});

export default rootReducer;
