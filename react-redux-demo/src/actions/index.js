import * as types from '../constants/ActionTypes'

export function addTodo(text) {
  return { type: types.ADD_TODO, text }
}

export function deleteItem(id) {
  return { type: types.DELETE_ITEM, id }
}

export function completeItem(id) {
  return { type: types.COM_ITEM, id }
}