import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000"

const initialState = {
    cart : [],
    status : 'idle',
    count : 0,
    total : 0,
    error : null
}

export const getAllCartItems = createAsyncThunk('cart/getAllCartItems', async() => {
    try{
        const response = await axios.get(`${BASE_URL}/api/v1/cart/getAllCartItems`)
        return response.data
    }
    catch(error){
        return error.response
    }
})

export const addCartItem = createAsyncThunk('cart/addCartItem', async({user, product, quantity}) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/v1/cart/addCartItem`, {user, product, quantity})
        console.log(response)
        return response.data
    }
    catch(error){
        return error.response
    }
})


const cartSlice = createSlice({
    name : "Cart",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getAllCartItems.fulfilled, (state, action) => {
            state.cart = action.payload
            state.status = 'successfull'
            
        })
        .addCase(getAllCartItems.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
        .addCase(addCartItem.fulfilled, (state, action) => {
            state.cart = action.payload.products
            state.count = action.payload.count
            state.total = action.payload.total
            state.status = 'successfull'
            
        })
        .addCase(addCartItem.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})


export const selectAllCartItems = (state) => state.cart.cart
export const selectCartCount = (state) => state.cart.count
export const selectCartTotal = (state) => state.cart.total
export const selectCartStatus = (state) => state.cart.status
export const selectCartError = (state) => state.cart.error

export default cartSlice.reducer