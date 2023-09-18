import { configureStore } from '@reduxjs/toolkit'

import counterReducer from  './counter' ;
import categoryReducer from './category'; 

export const store = configureStore({
    reducer: { 
        counter  : counterReducer, 
        category : categoryReducer,
    },
})