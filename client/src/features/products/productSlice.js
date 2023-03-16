import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000"

const initialState = {
    products : [],
    status : 'idle',
    error : null
}

export const getAllProducts = createAsyncThunk('products/getAllProducts', async() => {
    try{
        const response = await axios.get(`${BASE_URL}/api/v1/products/getAllProducts`)
        return response.data
    }
    catch(error){
        return error.response
    }
})


const productsSlice = createSlice({
    name : "Products",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.products = action.payload
            state.status = 'successfull'
            
        })
        .addCase(getAllProducts.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})


export const selectProducts = (state) => state.products.products
export const selectProductsStatus = (state) => state.products.status
export const selectProductsError = (state) => state.products.error

export default productsSlice.reducer