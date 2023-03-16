import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000"

const initialState = {
    categories : {},
    status : 'idle',
    error : null
}

export const getAllCategories = createAsyncThunk('categories/getAllCategories', async() => {
    try{
        const response = await axios.get(`${BASE_URL}/api/v1/categories/getAllCategories`)
        return response.data
    }
    catch(error){
        return error.response
    }
})


const categoriesSlice = createSlice({
    name : "Categories",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.categories = action.payload
            state.status = 'successfull'
            
        })
        .addCase(getAllCategories.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})


export const selectCategories = (state) => state.categories.categories
export const selectCategoriesStatus = (state) => state.categories.status
export const selectCategoriesError = (state) => state.categories.error

export default categoriesSlice.reducer