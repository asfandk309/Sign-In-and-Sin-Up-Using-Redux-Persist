import { createStore, compose, applyMiddleware } from "redux";
import reducers from "./Reducers";
import thunk from 'redux-thunk'
import {persistStore , persistReducer} from 'redux-persist'
import storage from "redux-persist/lib/storage";

 export const persistConfig = {
    key : "persistUser" ,
    storage
    
}

const persistedReducer = persistReducer(persistConfig , reducers)

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(persistedReducer , composeEnhancers(applyMiddleware(thunk)))

export const persistor = persistStore(store)