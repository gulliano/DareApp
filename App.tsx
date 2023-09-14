import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter' // action creator
import Icon from 'react-native-vector-icons/FontAwesome';

const App = () => {

  const count = useSelector((state) => state.counter.value) // read the store

  const dispatch = useDispatch() // write in the store

  return (
    <View>
      <Text>nb {count}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />
      <Icon name="music" color="#4F8EF7" />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})