import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import reduxThunk from "redux-thunk";
import rootReducer from "./root-reducer";

// On refresh of website (f5) persist data
function saveToLocalStorage(state){
    try{
        const serializedState = JSON.stringify(state);
        localStorage.setItem("state", serializedState);
    } catch(e) {
        console.log(`Error saving to local storage ${JSON.stringify(e)}`); 
    }
} 
function loadFromLocalStorage(){
    try {
        const serializedState = localStorage.getItem("state");
        if(serializedState === null) return undefined;
        return JSON.parse(serializedState);
    } catch(e){
        console.log(`Error with loading local storage: ${JSON.stringify(e)}`);
        return undefined;
    }
}
const persistedState = loadFromLocalStorage();
const middlewares = [logger, reduxThunk];

const store = createStore(rootReducer, persistedState, applyMiddleware(...middlewares));

store.subscribe( () => saveToLocalStorage(store.getState()));

export default store;
