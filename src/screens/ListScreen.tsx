import React from 'react'
import { View, StatusBar, StyleSheet, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useDispatch} from 'react-redux'

import Header from '../components/Header'
import ListView from '../components/ListView'
import { actionCreators } from '../redux/actions'

export default function ListScreen({ navigation }: any) {
  const { checkModel } = actionCreators
  const dispatch = useDispatch()
  return (
    <React.Fragment>
      <StatusBar barStyle='light-content' />
      <View style={styles.container}>
        <Header title={'List of Items'} />
        <ListView />
        <View style={styles.modalBtnWrap}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Modal')
              dispatch(checkModel(true))
            }}
            style={styles.modalBtn}
          >
            <Ionicons name='ios-add' color='#fff' size={50} />
          </TouchableOpacity>
        </View>
      </View>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#cacaca',
  },

  modalBtnWrap: {
    right: 20,
    bottom: 70,
    borderRadius: 50,
    position: 'absolute',
    backgroundColor: '#014d01',
  },
  modalBtn: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
