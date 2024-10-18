import { configureStore } from "@reduxjs/toolkit";
import { shoesSlice } from "./shoesSlice";
export const merastore=configureStore({
    reducer:shoesSlice.reducer
})