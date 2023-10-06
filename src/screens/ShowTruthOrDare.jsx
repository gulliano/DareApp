import { View, Text } from 'react-native'
import React, { useEffect , useState } from 'react'
import { useDispatch, useSelector } from 'react-redux' ;
import NextPlayer from '../component/button/NextPlayer'
import { loadDataDareOrTruth } from '../commonjs/db';
import { getRandomIndex } from '../commonjs/function';
import { updateTod } from '../redux/player';


const ShowTruthOrDare = ({route}) => {

  const { id } = route.params ;

  const dispatch = useDispatch() ;

  const [showtod, setShowtod] = useState()

  const { players , position } = useSelector( state => state.player)


  const loadDareOrTruth = async() => { 
     
    //console.log("load") ;

      const dataTruthOrDare = await  loadDataDareOrTruth(id,type) ;
     // console.log("dataTruthOrDare" , dataTruthOrDare) ; 
      const index = getRandomIndex(0, dataTruthOrDare.length);
     //  console.log(index)

     setShowtod( dataTruthOrDare[index]) ;

     // enregistrement du tod du player dans le store 
      dispatch(updateTod(dataTruthOrDare[index].id))
       
      


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