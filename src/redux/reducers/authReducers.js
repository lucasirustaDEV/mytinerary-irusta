import { createReducer } from "@reduxjs/toolkit";
import { authenticate, login, signUp } from "../actions/authActions";

const initialState = {
    user: {},
    token: null
}

const authReducers = createReducer( initialState,
    (builder) => builder
        .addCase(login, (state, action) => {
            const newState = { ...state, ...action.payload }
            return newState
        })
        .addCase(signUp, (state, action) => {
            const newState = { ...state, ...action.payload }
            return newState
        })
        .addCase(authenticate.fulfilled, (state, action) => {
            const newState = { ...state, ...action.payload}
            return newState
        })
    
    )

export default authReducers