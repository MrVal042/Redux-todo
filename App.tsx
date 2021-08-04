import React from 'react'
// import { createStore } from 'redux'
import { Provider as StateProvider } from 'react-redux'
// import reducer from './src/redux/reducer'
import MainStackNavigator from './src/navigation/AppNavigator'
import { store } from './src/redux/reducer'

// const store = createStore(reducer)

export default function App() {
  return (
    <StateProvider store={store}>
      <MainStackNavigator />
    </StateProvider>
  )
}
