import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Slices/cartSlices.js"
import productReducer from "./Slices/productSlices.js"

export const store= configureStore({
    reducer:{
        cartItem: cartReducer,
        products: productReducer,
    }
})