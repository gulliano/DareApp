import { createSlice } from "@reduxjs/toolkit"


const initState = {
                players  : [],
                position : 0 ,
}

export const player = createSlice({
    name:'player',
    initialState:initState,
    reducers:{
        addPlayer:(state,action)=>{ //  ajouter un joueur

          // ajoute un élément à la fin d'un tableau et retourne la nouvelle taille du tableau.
            state.players.push(action.payload) ;

            return state ;
        },
       delPlayer:(state,action)=>{ //  s un joueur

            const newPlayers = state.players.filter(item=>item.id != action.payload.id) ;
       
      
            const newState = {
                players : newPlayers,
                position: state.position,

            }

            return newState ;
        },
       resetPlayer:(state,action)=>{ //  vide la liste

       // console.log('nou ka vidé sa')
            return initState ;
        },
    }

})

export const {  addPlayer, delPlayer , resetPlayer } = player.actions ;

export default player.reducer;