import { createSlice } from "@reduxjs/toolkit";

const initState = [] ;

export const category = createSlice({
    name:"category" ,
    initialState: initState,
    reducers: {
        add:(state, action) => {

          //  console.log("state" , 
            return action.payload  ;
        }
    }
})


export const { add } = category.actions ;

export default category.reducer ;
    




