import { combineReducers } from "redux";
import todo from "./todo-paging";
import contact from "./contact";

const rootReducer = combineReducers({
  todo,
  contact,
});

export default rootReducer;
