import {
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  CLEAR_ITEMS,
  AlERT_MESSAGE,
  TOGGLE_MODAL,
} from './types'
const redux = require('redux')
const createStore = redux.createStore

// initial state
const initialState = {
  modal: false,
  message: [{ color: true, text: `Don't miss plans, write it down.` }],
  todoList: [{ id: '10000', title: 'default todo', completed: false }],
}



// helper functions
function reducer(state = initialState, action: any) {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        todoList: [
          {
            id: action.payload.id,
            title: action.payload.item,
            completed: false,
          },
          ...state.todoList,
        ],
      }
    case DELETE_ITEM:
      return {
        ...state,
        todoList: [
          ...state.todoList.filter((todo) => todo.id !== action.payload),
        ],
      }
    case TOGGLE_ITEM:
      return {
        ...state,
        todoList: state.todoList.map((todo) =>
          todo.id !== action.payload
            ? todo
            : { ...todo, completed: !todo.completed }
        ),
      }
    case CLEAR_ITEMS:
      return { ...state, todoList: (state.todoList = []) }
    case AlERT_MESSAGE:
      return {
        ...state,
        message: [{ text: action.payload.text, color: action.payload.color }],
      }
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: (state.modal = action.payload),
      }
    default:
      return state
  }
}

export const store = createStore(reducer)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default reducer
