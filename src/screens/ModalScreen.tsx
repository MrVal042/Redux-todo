import React, { useState } from 'react'
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/reducer'
import { actionCreators } from '../redux/actions'
import ShowMessage from '../components/ShowMessage'

export default function ModalScreen({ navigation }: any) {
  const dispatch = useDispatch()
  const [value, setValue] = useState('')
  const { addItem, alertMessage, checkModel } = actionCreators
  const isModal = useSelector((state: RootState) => state.modal)

  const onSaveNote = (value: string) => {
    if (value === '') {
      dispatch(alertMessage(false, 'Invalid Input'))
      setTimeout(() => {
        dispatch(alertMessage(true, 'Type text and try again?'))
      }, 3000)
      return
    }
    const id = new Date().getTime().toString()
    dispatch(addItem(value, id))
    dispatch(alertMessage(true, 'Successfully Added '))
    setValue('')

    setTimeout(() => {
      dispatch(alertMessage(true, 'What else do you want to do?'))
    }, 3000)
  }

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.closeButtonContainer}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => {
              navigation.goBack()
              dispatch(checkModel(false))
            }}
          >
            <Ionicons name='ios-close' color='#101010' size={40} />
          </TouchableOpacity>
        </View>
        <View style={styles.modalContainer}>
          {isModal && <ShowMessage />}
          <View style={styles.inputWrap}>
            <TextInput
              style={styles.input}
              value={value}
              onChangeText={(value) => setValue(value)}
              clearButtonMode='while-editing'
              placeholder=" What's on your mind to do? "
            />
            <TouchableOpacity
              style={styles.addbtn}
              onPress={() => onSaveNote(value)}
            >
              <Text style={{ color: '#fff', fontSize: 20 }}>
                <Ionicons name='ios-paper-plane' color='#014d01' size={40} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    right: 0,
    bottom: 0,
    width: '100%',
    height: '40%',
    position: 'absolute',
    flexDirection: 'row',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    justifyContent: 'flex-end',
    backgroundColor: '#f5f5f5',
  },
  closeButtonContainer: {
    right: 10,
    position: 'absolute',
    alignItems: 'flex-end',
  },
  closeButton: {
    top: 10,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    padding: 0,
    height: 120,
    width: '100%',
    marginTop: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    justifyContent: 'center',
  },
  inputWrap: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    padding: 5,
    height: 70,
    width: '80%',
    fontSize: 18,
    borderWidth: 1,
    paddingLeft: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderColor: 'gray',
    backgroundColor: '#fff',
  },
  addbtn: {
    height: 70,
    width: '20%',
    position: 'relative',
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderLeftWidth: 0,
    backgroundColor: '#f5f5f5',
  },
})
