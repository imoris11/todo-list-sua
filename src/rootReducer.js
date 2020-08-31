import { combineReducers } from 'redux'
import todoReducer from './Todo/redux/reducer'

const initialState = {
    appName: "Todo List With Redux"
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}


const reducers = {
    app: appReducer,
    todoList: todoReducer
}

const rootReducer = combineReducers(reducers)

export default rootReducer