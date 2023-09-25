import { createSlice } from "@reduxjs/toolkit"


const initState = {
                players  : [{id:1   , name:'Ludmilla'} , 
                            { id:2  , name:'Hervé'} , 
                            { id:3  , name : 'Anne'}],
                position : 0 ,
}

export const player = createSlice({
    name:'player',
    initialState:initState,
    reducers:{
        addPlayer:(state,action)=>{ //  ajouter un joueur
            return state ;
        },
       delPlayer:(state,action)=>{ //  s un joueur
            return state ;
        },
       resetPlayer:(state,action)=>{ //  vide la liste
            return state ;
        },
    }

})

export const {  addPlayer, delPlayer , resetPlayer } = player.actions ;

export default player.reducer;