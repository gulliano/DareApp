import { createSlice } from "@reduxjs/toolkit";

const initialState = [] ;

export const dareOrTruth = createSlice({
    name:'dare-or-truth',
    initialState: initialState,
    reducers :{
        addDareOrTruth: (state, action)=>{
            return action.payload ;
        }
    }

})

export const { addDareOrTruth } = dareOrTruth.actions ;

export default dareOrTruth.reducer ;


