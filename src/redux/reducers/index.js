import { combineReducers } from "redux";
import todo from "./todo-paging";
import contact from "./contact-paging";
import covid from "./covid-paging";

const rootReducer = combineReducers({
  todo,
  contact,
  covid,
});

export default rootReducer;
