import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from "redux-thunk";
import {itemReducer} from "../reducers/item-reducer";

const reducers = combineReducers({
    item: itemReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))

export type RootReducerType = ReturnType<typeof reducers>
