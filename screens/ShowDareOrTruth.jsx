import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button } from 'react-native-paper';

import firestore from '@react-native-firebase/firestore';

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}


const ShowDareOrTruth = ({route, navigation}) => {

  const [monText , setMonText] = useState('') ;

  //  fonction retour
   const goBack = () => { 
    
      navigation.goBack() ;

    }
    // récupérer les données dans firebase

    const loadData = async () => { 

      const snapData = await firestore().collection('DareOrTruth').get() ;

     // console.log("snapData" , snapData.empty) ;

      if(!snapData.empty){

        const datas = snapData.docs.map(doc=>{
          return { id:doc.id , ...doc.data()} ;
        })

      
        // génération d'un index 
       const index = getRandomInt(0, datas.length  )
       //console.log("index" ,  index) 

        setMonText(datas[index].title) ;
      }


     }

     useEffect(()=>{

      loadData() ;

     })


  return (
    <View>
      <Text>{ monText }</Text>
      <Button onPress={goBack} >Retour</Button>
      <Button onPress={loadData} >loadData</Button>
    </View>
  )
}

export default ShowDareOrTruth