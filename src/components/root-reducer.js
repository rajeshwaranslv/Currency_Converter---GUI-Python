import { combineReducers } from "redux";
import FAQ_Reducer from "./reducers/faqred";
import PAGE_Reducer from "./reducers/pagered";
const rootReducer=combineReducers({
    FAQ_Reducer,
    PAGE_Reducer,
})
export default rootReducer;