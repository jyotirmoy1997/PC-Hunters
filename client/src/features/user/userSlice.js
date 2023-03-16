import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "http://localhost:5000"

const initialState = {
    allUsers : [],
    user : {},
    status : 'loggedOut',
    error : null
}

export const getAllUsers = createAsyncThunk('users/getAllUsers', async() => {
    try{
        const response = await axios.get(`${BASE_URL}/api/v1/users/getAllUsers`)
        return response.data
    }
    catch(error){
        console.log(error)
        return error.response
    }
})


export const signInUser = createAsyncThunk('users/signInUser', async(formData) => {
    try{
        const response = await axios.post(`${BASE_URL}/api/v1/auth/login`, 
        {...formData}, { withCredentials: true })
        console.log(response)
        return response
    }
    catch(error){
        console.log(error)
        return error.response
    }
})

export const updateUser = createAsyncThunk('users/updateUser', async(formData) => {
    try{
        const response = await axios.patch(`${BASE_URL}/api/v1/users/updateUser`, 
        {...formData}, { withCredentials: true })
        return response.data
    }
    catch(error){
        return error.response
    }
})

export const logOutUser = createAsyncThunk('users/logOutUser', async() => {
    const response = await axios.post(`${BASE_URL}/api/v1/auth/logout`, { withCredentials: true })
    return response.data
})

const userSlice = createSlice({
    name : "Users",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder.addCase(signInUser.fulfilled, (state, action) => {
            console.log(action.payload)
            if(action.payload.status === 400){
                state.user = {}
                state.error = action.payload.data.msg
                state.status = "loggedOut"
            }
            else{

                state.user = action.payload.data
                state.status = "loggedIn"
                state.error = null;
            }
        })
        .addCase(signInUser.rejected, (state, action) => {
            state.error = action.error.message
        })
        .addCase(getAllUsers.fulfilled, (state, action) => {
            state.allUsers = action.payload
        })
        .addCase(updateUser.fulfilled, (state, action) => {
            state.user = action.payload
        })
        .addCase(updateUser.rejected, (state, action) => {
            state.error = action.error.message
        })
        .addCase(logOutUser.fulfilled, (state, action) => {
            state.user = {}
            state.status = "loggedOut"
        })
    }
})


export const selectUser = (state) => state.users.user
export const selectAllUser = (state) => state.users.allUsers
export const userStatus = (state) => state.users.status
export const userError = (state) => state.users.error

export default userSlice.reducer