import { View, Text } from 'react-native'
import React from 'react'
import CategoryData from './category/CategoryData'
import CategoryStore from './category/CategoryStore'

const Tuto = () => {
  return (
    <View>
      <Text>Tuto</Text>
      <CategoryData />
      <CategoryStore />
    </View>
  )
}

export default Tuto