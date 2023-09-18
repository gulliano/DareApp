import { StyleSheet, Text, View } from 'react-native'
import React from 'react';
import { Button } from 'react-native-paper';

import styles from '../styles';
import { useNavigation } from '@react-navigation/native';


type NameProps = { id:number, name: string };


const ItemCategory = ({name}: NameProps ) => {

   const navigation = useNavigation() ;
    const gotoDareOrTruth = () => { 
            navigation.navigate("Dareortruth") ;
            
     }


  return (
    <Button  onPress={gotoDareOrTruth} contentStyle={styles.item} labelStyle={styles.title} > { name }</Button>
    // <View style={styles.item}>
    //   <Text style={styles.title}>{name}</Text>
    // </View>
  )
}

export default ItemCategory

