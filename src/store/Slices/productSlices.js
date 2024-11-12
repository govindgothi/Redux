import { createSlice } from '@reduxjs/toolkit'
import { productsList } from '../../components/ProductList'
const slice = createSlice({
    name: 'cart',
    initialState:productsList ,
    reducers: {
        products(state=initialState,action){
            return state
        }
    }
})
export const {products}=slice.actions
export default slice.reducer