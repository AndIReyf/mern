import {ActionType, item, StateType} from "../actions/items-type";
import {Dispatch} from "redux";
import {itemsAPI} from "../API/itemsAPI";

const initState: StateType = {
    items: [],
    loading: 'loaded'
}

export const itemReducer = (state: StateType = initState, action: ActionType): StateType => {
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                items: [{_id: action.payload._id, name: action.payload.name}, ...state.items]
            }
        case "DEL_ITEM":
            return {
                ...state,
                items: state.items.filter(item => item._id !== action.id)
            }
        case "GET_ITEMS":
            return {
                ...state,
                items: action.payload
            }
        case "ITEMS_LOADING":
            return {...state, loading: action.payload}
        default:
            return state
    }
}

// Thunk
export const addItem = (name: string) => async (dispatch: Dispatch) => {
    dispatch(item.loading('loading'))

    try {
        const res = await itemsAPI.add(name)
        dispatch(item.add(res.data))
        dispatch(item.loading('loaded'))

    } catch (e) {
        console.log(e)
        dispatch(item.loading('loaded'))
    }
}
export const getItems = () => async (dispatch: Dispatch) => {
    dispatch(item.loading('loading'))

    try {
        const res = await itemsAPI.get()
        dispatch(item.get(res.data))
        dispatch(item.loading('loaded'))

    } catch (e) {
        console.log(e)
        dispatch(item.loading('loaded'))
    }
}
export const delItem = (id: string) => async (dispatch: Dispatch) => {
    dispatch(item.loading('loading'))

    try {
        await itemsAPI.del(id)
        dispatch(item.del(id))
        dispatch(item.loading('loaded'))

    } catch (e) {
        console.log(e)
        dispatch(item.loading('loaded'))
    }
}
