import {  SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useDispatch} from 'react-redux';
import { add } from './redux/category';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DareOrTruth from './screens/DareOrTruth';
import Home from './screens/Home';
import ShowDareOrTruth from './screens/ShowDareOrTruth';



const Stack = createNativeStackNavigator() ;

const App = () => {

  const dispatch = useDispatch() ;

  const loadDbApp = async () => {

        const categories = await  firestore().collection('category').get() ;
          

        // vérification des données 
        if(!categories.empty){

            const dataCategories = categories.docs.map(doc=>{

                                        return { id:doc.id , ...doc.data() }

                                    })
                
         // enregistrement des categories dans le store ; 
          dispatch(add(dataCategories)) ;

        }
       
       

    }

    // chargement de l'app
    useEffect(()=>{

        loadDbApp() ;

        console.log('app load') ; 

    },[])

  return (
   <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='DareOrTruth' component={DareOrTruth} />
            <Stack.Screen name='ShowDareOrTruth' component={ShowDareOrTruth} />
        </Stack.Navigator>

   </NavigationContainer>
  )
}

export default App