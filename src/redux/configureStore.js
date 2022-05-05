import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './counter';

// redux splits to 3 things: 
    // state (where we keep our variables ex: count = 0)
    // actions (ex: increment / decrement)
    // reducers (which makes something when the action is called: ex: count + / count -)

export default configureStore({
    reducer: {
        counter: counterReducer
    }
});