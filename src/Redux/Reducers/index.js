import { combineReducers } from "redux";
import usersReducer from "./UsersReduer";


const reducers = combineReducers({
    users : usersReducer 
})

export default reducers;