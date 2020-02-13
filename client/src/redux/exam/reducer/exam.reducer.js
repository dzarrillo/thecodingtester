import examTypes from "../actions/exam.types";
import axios from "axios";

const INITIAL_STATE = {
    questions: []
};

const examReducer = ( state = INITIAL_STATE, action) => {
    switch(action.type) {
        case examTypes.GET_CSSEXAM:
            console.log(`In Get_cssexams`);
            const res = await axios.get("/api/cssexam");
            dispatch({ type: GET_CSSEXAM, payload: res.data });
            return state;
        case examTypes.LIST_CSSQUESTIONS:

            return state;
        default:
            return state;
    }
};

export default examReducer;