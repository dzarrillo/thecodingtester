import { combineReducers } from "redux";

// import userReducer from './user/user.reducer';
import authReducer from "./user/reducer/authReducer";

export default combineReducers({
  auth: authReducer,
  // exam: examReducer
});