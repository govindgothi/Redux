import { createSlice } from '@reduxjs/toolkit'
const findItemIndex = (state,action)=>  state.findIndex((cartItem) => cartItem.productId === action.payload.productId)
    
    const slice = createSlice({
    name: 'cart',
    initialState: [ ],
    reducers: {
        addToCart(state=initialState, action){
            const existingItemIndex = findItemIndex(state,action)
            if(existingItemIndex !== -1) state[existingItemIndex].quantity += 1
             else{
                console.log(action.payload)
                state.push({ ...action.payload, quantity: 1 })    
             }
        },
        removeToCart(state=initialState,action){
            const itemExist = state.find((elem)=>elem.id === action.payload.objectId)
            if(!itemExist) return
        },
        increaseCartItemQuantity(state=initialState,action){
            const existingItemIndex = findItemIndex(state,action)
            if(existingItemIndex !== -1) state[existingItemIndex].quantity += 1
        },
        decreaseCartItemQuantity(state=initialState,action){
            const existingItemIndex = findItemIndex(state, action)
            state[existingItemIndex].quantity -= 1
            if (state[existingItemIndex].quantity === 0)
              state.splice(existingItemIndex, 1)
          }
    }
})
 export const {addToCart,removeToCart,increaseCartItemQuantity,decreaseCartItemQuantity} = slice.actions
 export default slice.reducer