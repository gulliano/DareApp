import { View, Text } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';

const App = () => {


   const loadDbApp = async () => {

        const categories = await  firestore().collection('category').get() ;
        
        console.log('categories' , categories) ; 

    }

    // chargement de l'app
    useEffect(()=>{
        
        loadDbApp() ;

        console.log('app load') ; 

    },[])

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

export default App