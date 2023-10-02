import { configureStore } from "@reduxjs/toolkit";
import { category } from "./category";


export const store = configureStore({
    category : category
})