import { createReducer } from "@reduxjs/toolkit";
import { getAllCitiesAsync, getOneCityAsync } from "../actions/citiesActions";

const initialState = {
    cities: [],
    city: {},
    loading: false
}

const citiesReducers = createReducer( initialState,
    (builder) => builder

        .addCase(getAllCitiesAsync.fulfilled, (state, action) =>{
            //console.log(action.payload)
            const newState = { ...state, cities : action.payload, loading: false}
            return newState
        })
        .addCase(getAllCitiesAsync.pending, (state, action) =>{
            const newState = { ...state, loading: true}
            return newState
        })
        .addCase(getAllCitiesAsync.rejected, (state, action) =>{
            const newState = { ...state, loading: false}
            return newState
        })

        .addCase(getOneCityAsync.fulfilled, (state, action) =>{
            const newState = { ...state, cities : action.payload, loading: false}
            return newState
        })
        .addCase(getOneCityAsync.pending, (state, action) =>{
            const newState = { ...state, loading: true}
            return newState
        })
        .addCase(getOneCityAsync.rejected, (state, action) =>{
            const newState = { ...state, loading: false}
            return newState
        })
)

export default citiesReducers