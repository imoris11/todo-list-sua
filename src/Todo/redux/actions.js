export const ADD_TODO_ITEM = 'ADD_TODO_ITEM'
export const DELETE_ITEM = 'DELETE_ITEM'

export const addItemToList = (payload) => ({
    type: ADD_TODO_ITEM,
    payload
})

export const deleteItemFromList = (payload) => ({
    type: DELETE_ITEM,
    payload
})