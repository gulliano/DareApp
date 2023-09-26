import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'

const Category = ({navigation}) => {
  return (
    <View>
      <Text>Category</Text>

      <Button mode='contained' onPress={ () => navigation.navigate('truthordare')} > Action / vérité</Button>
    </View>
  )
}

export default Category