import {
  ADD_ITEM,
  DELETE_ITEM,
  TOGGLE_ITEM,
  CLEAR_ITEMS,
  AlERT_MESSAGE,
  TOGGLE_MODAL,
} from './types'

// Define action creators
const addItem = (item: string, id: string) => {
  return {
    type: ADD_ITEM,
    payload: { item, id },
  }
}
const deleteItem = (id: string) => {
  return {
    type: DELETE_ITEM,
    payload: id,
  }
}

const togleItem = (id: string) => {
  return {
    type: TOGGLE_ITEM,
    payload: id,
  }
}

const clearItems = () => {
  return {
    type: CLEAR_ITEMS,
  }
}
const alertMessage = (color: boolean, text: string) => {
  return {
    type: AlERT_MESSAGE,
    payload: { color, text },
  }
}
const checkModel = (status: boolean) => {
  return {
    type: TOGGLE_MODAL,
    payload: status,
  }
}

const actionCreators = {
  addItem,
  deleteItem,
  togleItem,
  clearItems,
  alertMessage,
  checkModel,
}

export { actionCreators }
