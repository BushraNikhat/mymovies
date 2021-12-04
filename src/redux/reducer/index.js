import {combineReducers} from "redux"
import starWarReducer from "./reducer"
import movieReducer from "./movieReducer"

const rootReducer=combineReducers({
    starWarReducer,
    movieReducer
})
export default rootReducer