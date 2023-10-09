
import firestore from '@react-native-firebase/firestore';


export const loadData = async (collectionName) => {

    const snapShot = await  firestore().collection(collectionName).get() ;
      

    // vérification des données 
    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{

                                    return { id:doc.id , ...doc.data() }

                                })
            

            return datas;
    }else{
        return [] ;
    }
   
   

}

/***************
 * * 
 * *
 * * params( id<string> : id category)
 * */

export const loadDataDareOrTruth = async (id , type) => {

 

   
    const snapShot = await  firestore()
                                    .collection("DareOrTruth")   
                                    .where("category" , '==' , id)
                                    .where("type" , "==" , type)
                                    .get() ;
      

    // vérification des données 
    if(!snapShot.empty){

        const datas = snapShot.docs.map(doc=>{

                                    return { id:doc.id , ...doc.data() }

                                }).filter(item => item.category==id)
            
 //console.log('datas' , datas.filter(item => item.type == type)) ;
        return datas
    }else{
        return [] ;
    }




}


/***************
 * * 
 * *
 * * params( id<string> : id category)
 * */

export const loadDataDareOrTruthTod = async (id , type, tod) => {

    console.log("tod" , tod) ; 
 
    
     const snapShot = await  firestore()
                                     .collection("DareOrTruth")   
                                     .where("category" , '==' , id)
                                     .where("type" , "==" , type)
                                     .where(firestore.FieldPath.documentId(),'not-in' , tod)
                                     .get() ;
       
 
     // vérification des données 
     if(!snapShot.empty){
 
         const datas = snapShot.docs.map(doc=>{
 
                                     return { id:doc.id , ...doc.data() }
 
                                 }).filter(item => item.category==id)
             
  //console.log('datas' , datas.filter(item => item.type == type)) ;
         return datas
     }else{
         return [] ;
     }
 
 
 
 
 }
 
