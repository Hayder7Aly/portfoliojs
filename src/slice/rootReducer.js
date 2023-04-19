import { combineReducers } from "redux";
import portfolioReducer from "./portfolioSlice"
const rootReducer = combineReducers({
    portfolio : portfolioReducer
})

export default rootReducer