import { add } from '../redux/category';
import firestore from '@react-native-firebase/firestore';


export const loadDbApp = async () => {

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