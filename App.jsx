import {  SafeAreaView } from 'react-native';
import React, { useEffect, useState } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useDispatch} from 'react-redux';
import { add } from './redux/category';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import DareOrTruth from './screens/DareOrTruth';
import Home from './screens/Home';
import ShowDareOrTruth from './screens/ShowDareOrTruth';
import { ActivityIndicator } from 'react-native-paper';



const Stack = createNativeStackNavigator() ;

const App = () => {

  const [loading , setLoading ] = useState(true ) ;

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

          setTimeout(()=>{

            setLoading(false)

          },3600) ;
        }

       
       

    }

    // chargement de l'app
    useEffect(()=>{

        loadDbApp() ;

        console.log('app load') ; 

    },[])

  return (
   <NavigationContainer>
       
     { loading?<ActivityIndicator animating={true} /> :
       <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='DareOrTruth' component={DareOrTruth} />
            <Stack.Screen name='ShowDareOrTruth' component={ShowDareOrTruth} />
        </Stack.Navigator>}

   </NavigationContainer>
  )
}

export default App