import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux' ;
import NextPlayer from '../component/button/NextPlayer'


const ShowTruthOrDare = () => {

  const { players , position } = useSelector( state => state.player)

  return (
    <View>
      <Text>{players[position].name}</Text>
      <NextPlayer />

    
    </View>
  )
}

export default ShowTruthOrDare