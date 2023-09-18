import { createSlice } from "@reduxjs/toolkit";

const initState = [{ id: 1 ,  name: "Gage entre amis" },
                    { id: 2 , name : "A distance hot"},
                    { id: 3 , name : "Couple"}] ;

export const category = createSlice({
    name:"category" ,
    initialState: initState,
    reducers: {
        add:(state) => {
            return state  ;
        }
    }
})

export default category.reducer ;
    




