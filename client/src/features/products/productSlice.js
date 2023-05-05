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

export const addNewProduct = createAsyncThunk('products/addNewProduct', async(product) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/v1/products/createProduct`, {...product})
        return response.data
    }
    catch(error){
        return error.response
    }
})

export const updateProduct = createAsyncThunk('products/updateProduct', async({productId, product}) => {
    try{
        const response = await axios.patch(`${BASE_URL}/api/v1/products/${productId}`, {...product})
        return response.data
    }
    catch(error){
        return error.response
    }
})

export const deleteProduct = createAsyncThunk('products/deleteProduct', async(productId) => {
    try{
        const response = await axios.delete(`${BASE_URL}/api/v1/products/${productId}`)
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
        .addCase(addNewProduct.fulfilled, (state, action) => {
            state.products.push(action.payload)
            state.status = 'successfull'
            
        })
        .addCase(addNewProduct.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
        .addCase(updateProduct.fulfilled, (state, action) => {
            const id = action.payload._id
            const productsArray = state.products.filter((p) => p._id !== id)
            state.products = [...productsArray, action.payload]
            
        })
        .addCase(deleteProduct.fulfilled, (state, action) => {
            return
        })
    }
})


export const selectProducts = (state) => state.products.products
export const selectProductsStatus = (state) => state.products.status
export const selectProductsError = (state) => state.products.error

export default productsSlice.reducer