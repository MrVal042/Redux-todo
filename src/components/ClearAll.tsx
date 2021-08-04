import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../redux/actions'

export default function ClearAll() {
  const dispatch = useDispatch()
  const { clearItems, alertMessage } = actionCreators

  const handleClearAll = () => {
    Alert.alert(
      'WARNING !!!',
      'Want to remove all?',
      [
        {
          text: 'No',
        },
        { text: '   ' },
        {
          text: 'Yes',
          onPress: () => {
            dispatch(clearItems())
            dispatch(alertMessage(false, 'List Cleared '))
            setTimeout(() => {
              dispatch(
                alertMessage(true, "Don't miss plans, write new one again")
              )
            }, 3000)
            // AsyncStorage.clear()
          },
        },
      ],
      { cancelable: true }
    )
  }
  return (
    <TouchableOpacity style={styles.clearAll} onPress={handleClearAll}>
      <Text style={{ color: '#fff' }}>Clear list</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  clearAll: {
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: 'darkred',
  },
})
