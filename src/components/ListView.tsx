import React from 'react'
import { View, FlatList, StyleSheet } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import Items from './Items'
import ClearAll from './ClearAll'
import {RootState } from '../redux/reducer'
import { actionCreators } from '../redux/actions'

export default function ListView() {
  const todoList = useSelector((state: RootState) => state.todoList)
  const dispatch = useDispatch()
  const { deleteItem, alertMessage } = actionCreators
  const removeItem = (id: string) => {
    dispatch(deleteItem(id))
    dispatch(alertMessage(false, 'Item removed '))
    setTimeout(() => {
      dispatch(alertMessage(true, 'What else do want to do? '))
    }, 3000)
  }
  return (
    <View style={styles.listWrap}>
      <FlatList
        data={todoList}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <Items item={item} index={index} removeItem={removeItem} />
        )}
      />
      {todoList.length !== 0 && <ClearAll />}
    </View>
  )
}

const styles = StyleSheet.create({
  listWrap: {
    flex: 1,
    width: '100%',
    paddingVertical: 10,
    backgroundColor: 'white',
  },
})
