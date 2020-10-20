import {configureStore } from "@reduxjs/toolkit";
import basketSlice from "../store/BasketSlicer"

export const store = configureStore(
    { 
        reducer: basketSlice.reducer 
    });

 

