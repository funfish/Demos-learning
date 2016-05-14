import { ADD_TODO, DELETE_ITEM, COM_ITEM} from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    text: 'NI ChuangWei',
    completed: false
  }
]

const addTodo = text => {
  return {
    id: Math.random().toString().split('.').join(''),
    text: text,
    completed: false 
  }
}

export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [ addTodo(action.text), ...state]
    case DELETE_ITEM:
      return state.filter(todo => todo.id !== action.id)
    case COM_ITEM:
      return state.map(todo => 
        todo.id === action.id ? Object.assign({}, todo, { completed: !todo.completed }) :
        todo
      )
    default:
      return state
  }
}
