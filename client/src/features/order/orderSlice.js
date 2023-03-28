import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000"

const initialState = {
    orders : [],
    status : 'idle',
    error : null
}

export const getAllOrderItems = createAsyncThunk('order/getAllOrderItems', async(user) => {
    try{
        const response = await axios.get(`${BASE_URL}/api/v1/cart/getAllOrderItems/${user}`)
        return response.data
    }
    catch(error){
        return error.response
    }
})

export const addNewOrder = createAsyncThunk('order/addNewOrder', async({user, products}) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/v1/order/addNewOrder`, {user, products})
        console.log(response)
        return response.data
    }
    catch(error){
        return error.response
    }
})


const orderSlice = createSlice({
    name : "Order",
    initialState,
    reducers : {
        clearOrder : (state) => {
            state.orders = [],
            state.status = 'idle',
            state.error = null
        }
    },
    extraReducers : (builder) => {
        builder.addCase(getAllOrderItems.fulfilled, (state, action) => {
            state.orders = action.payload.orders
            state.status = 'successfull'
            
        })
        .addCase(getAllOrderItems.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
        .addCase(addNewOrder.fulfilled, (state, action) => {
            state.orders = action.payload.orders.products
            state.status = 'successfull'
            
        })
        .addCase(addNewOrder.rejected, (state, action) => {
            state.error = action.error.message
            state.status = 'failed'
        })
    }
})


export const { clearOrder } = orderSlice.actions

export const selectOrderItems = (state) => state.order.orders
export const selectOrderStatus = (state) => state.order.status
export const selectOrderError = (state) => state.order.error

export default orderSlice.reducer