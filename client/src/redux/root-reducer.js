import { combineReducers } from "redux";

import authReducer from "./user/reducer/authReducer";

export default combineReducers({
  auth: authReducer,
  // ** Decided not to include interview questions in redux store
  // exam: examReducer
});