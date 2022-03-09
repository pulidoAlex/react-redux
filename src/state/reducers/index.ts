import {combineReducers} from "redux"
import reducer from "./bankReducer";
import bankReducer from "./bankReducer"


const reducers = combineReducers({
    bank: bankReducer
});

export default reducers;