import { View, Text, SafeAreaView, FlatList } from 'react-native';
import React, { useEffect } from 'react';
import firestore from '@react-native-firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { add } from './redux/category';
import ItemCategory from './component/ItemCategory';

const App = () => {

    const dispatch = useDispatch() ;

    // lecture des categories dans le store
    const storeCategory = useSelector(state => state.category) ;

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
        <SafeAreaView>
            <FlatList 
                data={storeCategory}
                renderItem={({item})=><ItemCategory data={item}/>}
                keyExtractor={item=>item.id}
                />
            
        </SafeAreaView>
  )
}

export default App