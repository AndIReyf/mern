const GET_ITEMS = 'GET_ITEMS'
const ADD_ITEM = 'ADD_ITEM'
const DEL_ITEM = 'DEL_ITEM'
const ITEMS_LOADING = 'ITEMS_LOADING'

// Action Creator
export const item = {
    get(payload: ItemsType) {
        return {type: GET_ITEMS, payload} as const
    },
    add(payload: ItemType) {
        return {type: ADD_ITEM, payload} as const
    },
    del(id: string) {
        return {type: DEL_ITEM, id} as const
    },
    loading(payload: LoadingType) {
        return {type: ITEMS_LOADING, payload} as const
    }
}

// Types
export type ActionType = ReturnType<typeof item.get>
    | ReturnType<typeof item.add>
    | ReturnType<typeof item.del>
    | ReturnType<typeof item.loading>
type LoadingType = 'loading' | 'loaded'
type ItemType = {
    _id: string
    name: string
}
export type ItemsType = Array<ItemType>
export type StateType = {
    items: ItemsType
    loading: LoadingType
}
