import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { FontAwesome } from '@expo/vector-icons'
import { useDispatch } from 'react-redux'
import { actionCreators } from '../redux/actions'

type props = {
  item: any
  index: number
  removeItem: (id: string) => void
}
export default function Items({ item, index, removeItem }: props) {
  const dispatch = useDispatch()
  const { togleItem } = actionCreators

  return (
    <View
      style={[
        styles.item,
        {
          backgroundColor: `${index % 2 == 0 ? '#ddd' : '#f9f9f9'}`,
        },
        item.completed && styles.checkedItem,
      ]}
    >
      <TouchableOpacity
        style={styles.itemText}
        onPress={() => dispatch(togleItem(item.id))}
      >
        <Text
          style={[
            styles.checkboxBase,
            item.completed && styles.checkedCheckbox,
          ]}
        >
          {item.completed && (
            <Ionicons name='checkmark' size={24} color='white' />
          )}
        </Text>
        <Text>{item.title} </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => removeItem(item.id)}>
        <FontAwesome name='trash-o' size={24} color='black' />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  item: {
    minHeight: 60,
    paddingVertical: 5,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  itemText: {
    flex: 1,
    maxWidth: '90%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxBase: {
    width: 24,
    height: 24,
    borderWidth: 2,
    marginRight: 20,
    borderRadius: 4,
    borderColor: 'gray',
  },
  checkedCheckbox: {
    backgroundColor: '#33e',
  },
  checkedItem: {
    backgroundColor: '#746e6e',
  },
})
