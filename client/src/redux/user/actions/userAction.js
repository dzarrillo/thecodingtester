import axios from "axios";
import { FETCH_USER } from "./userTypes";


export const fetchUser = () => async dispatch => {
    // console.log(" in fethcuser axios");
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};