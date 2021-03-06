import { ADD_TODO_ITEM, DELETE_ITEM } from "./actions"

const initialState = {
    data: []
}

const todoReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TODO_ITEM:
            return {
                ...state,
                data: [...state.data, action.payload]
            }
        case DELETE_ITEM:
            return {
                ...state,
                data: state.data.filter((item)=> item !== action.payload)
            }
        default:
            return state
    }
}

export default todoReducer