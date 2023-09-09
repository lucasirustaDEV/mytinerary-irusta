import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { LS } from "../../data/LocalStorage/LS";

const login = createAction('login', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
    }
    LS.set('token', credentials.token)
    return {
        payload: reducerData
    }
})
const signUp = createAction('signup', (credentials) => {
    const reducerData = {
        user: credentials.userData,
        token: credentials.token,
    }
    return {
        payload: reducerData
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
        const reducerData = {
            user: data.userData,
            token: token
        }
        return reducerData        
    } catch (error) {
        console.log(error)
    }

})

export { login, signUp, authenticate }