import { createReducer } from "@reduxjs/toolkit";
import { authenticate, login, signUp, logOut } from "../actions/authActions";

const initialState = {
    user: {},
    token: null,
    loading: false,
}

const authReducers = createReducer( initialState,
    (builder) => builder
        .addCase(login.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.userData,
                token: action.payload.token,
                loading: false,
                error: null
            }
            //const newState = { ...state, user: action.payload.userData, token: action.payload.token }
            //return newState
        })
        .addCase(login.pending, (state, action) => {
            return {
                ...state,
                loading: true
            }
        })
        .addCase(login.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })

        .addCase(signUp.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.userData,
                token: action.payload.token,
                loading: false,
                error: null
            }
        })
        .addCase(signUp.pending, (state, action) => {
            return {
                ...state,
                loading: true
            }
        })
        .addCase(signUp.rejected, (state, action) => {
            return {
                ...state,
                loading: false,
                error: action.payload,
            }
        })


        .addCase(authenticate.fulfilled, (state, action) => {
            return {
                ...state,
                user: action.payload.userData,
                token: action.payload.token,
                loading: false
            }
        })
        .addCase(authenticate.rejected, (state, action) => {
            return {
                ...state,
                user: {},
                token: null,
                loading: false
            }
        })

        .addCase(logOut, (state, action) => {
            return {
                ...state,
                user: {},
                token: null,
                loading: false
            }
        })
    
    )

export default authReducers