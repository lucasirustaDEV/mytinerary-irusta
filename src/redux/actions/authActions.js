import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LS } from "../../data/LocalStorage/LS";

const login = createAsyncThunk('login', async ( body,  { rejectWithValue } ) => {
    try {
        const res = await axios.post('http://localhost:3000/api/auth/in', body)
        LS.set('token', res.data.token)
        return res.data
    } catch (error) {
        console.log(error)     
        return rejectWithValue(error.response.data) 
    }
})


const signUp = createAsyncThunk('signup', async ( body,  { rejectWithValue } ) => {
    try {
        const res = await axios.post('http://localhost:3000/api/auth/up', body)
        LS.set('token', res.data.token)
        return res.data        
    } catch (error) {
        console.log(error)
        return rejectWithValue(error.response.data)       
    }
})

const authenticate = createAsyncThunk('authenticate', async() => {
    try {
        const token = LS.getText('token')
        console.log(token)
        const {data} = await axios.get('http://localhost:3000/api/auth/token', {
            headers: {
                Authorization: 'Bearer ' + token
            }
        })
        return data           
    } catch (error) {
        LS.rm('token')
        throw error
    }
})

const logOut = createAction('logout', () => {
    LS.rm('token')
    return {
        payload : null
    }
})

export { login, signUp, authenticate, logOut }