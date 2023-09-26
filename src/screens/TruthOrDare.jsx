import { View, Text } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper'
import { useSelector } from 'react-redux'

const TruthOrDare = ({navigation}) => {


  return (
    <View>
      <Text>TruthOrDare</Text>
      <Button mode='contained' onPress={ () => navigation.navigate('showtruthordare')} >start</Button>
    
    </View>
  )
}

export default TruthOrDare