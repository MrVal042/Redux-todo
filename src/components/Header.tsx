import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducer'
import ShowMessage from './ShowMessage'

type props = { title: string }

function Header(props: props) {
  const isModal = useSelector((state: RootState) => state.modal)
  const { title } = props
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      {!isModal && <ShowMessage />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    maxHeight: 100,
    alignItems: 'center',
  },
  text: {
    fontSize: 28,
    color: '#333',
    fontWeight: '500',
    fontStyle: 'italic',
    fontFamily: 'monospace',
  },
})
export default Header
