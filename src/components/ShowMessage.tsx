import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/reducer'

export default function ShowMessage() {
  const message = useSelector((state: RootState) => state.message)
  return (
    <View>
      <Text
        style={[
          styles.text,
          { color: `${message[0].color ? 'green' : 'brown'}` },
        ]}
      >
        {message[0].text}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 17,
    marginBottom: 20,
    fontStyle: 'italic',
    fontFamily: 'monospace',
  },
})
