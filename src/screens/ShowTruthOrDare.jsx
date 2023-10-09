import { View, Text } from 'react-native'
import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' ;
import NextPlayer from '../component/button/NextPlayer'
import { loadDataDareOrTruth, loadDataDareOrTruthTod } from '../commonjs/db';
import { getRandomIndex } from '../commonjs/function';
import { updateTod } from '../redux/player';


const ShowTruthOrDare = ({route}) => {

  const { id, type} = route.params ;

  const dispatch = useDispatch() ;

  const [showtod, setShowtod] = useState()

  const { players , position } = useSelector( state => state.player)


  const loadDareOrTruth = async() => { 
     
   // console.log("players" , players[position].tod) ;
      const { tod } =   players[position] ;

      if ( tod.length ==0  ){

        const dataTruthOrDare = await  loadDataDareOrTruth(id,type )  ;
     
        const index = getRandomIndex(0, dataTruthOrDare.length);
     
  
        setShowtod( dataTruthOrDare[index]) ;
  
       // enregistrement du tod du player dans le store 
        dispatch(updateTod(dataTruthOrDare[index].id))

      }else{

        const dataTruthOrDare = await  loadDataDareOrTruthTod(id,type, tod )  ;
     
        const index = getRandomIndex(0, dataTruthOrDare.length);
     
  
        setShowtod( dataTruthOrDare[index]) ;
  
       // enregistrement du tod du player dans le store 
        dispatch(updateTod(dataTruthOrDare[index].id))
      }
     
       
      


   }

    useEffect(() => {

      loadDareOrTruth() ;
   
    }, [])
    

  return (
    <View>
      <Text>{players[position]?.name}</Text>
      <Text > {showtod?.title } </Text>
      <NextPlayer id={id} />

    
    </View>
  )
}

export default ShowTruthOrDare