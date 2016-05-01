import { ADD_TODO } from '../constants/ActionTypes'

const initialState = [
  {
    text: 'NI ChuangWei',
    id: 0
  }
]

const addTodo = text => {
  return {
    id: Math.random().toString().split('.').join(''),
    text: text 
  }
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [ addTodo(action.text), ...state]
    default:
      return state
  }
}
