import { createReducer } from "@reduxjs/toolkit";
import { getAllCitiesAsync, getOneCityAsync, getItinerariesByCityIdAsync, setSearch, addToLikes, removeToLikes } from "../actions/citiesActions";

const initialState = {
    cities: [],
    city: {},
    loading: false,
    itineraries: [],
    search: '',
    likes: []
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
            const newState = { ...state, city : action.payload, loading: false}
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

        .addCase(getItinerariesByCityIdAsync.fulfilled, (state, action) =>{
            const newState = { ...state, itineraries : action.payload, loading: false}
            return newState
        })
        .addCase(getItinerariesByCityIdAsync.pending, (state, action) =>{
            const newState = { ...state, loading: true}
            return newState
        })
        .addCase(getItinerariesByCityIdAsync.rejected, (state, action) =>{
            const newState = { ...state, loading: false}
            return newState
        })

        .addCase(setSearch, (state, action) => {
            const newState = { ...state, search : action.payload}
            return newState
        })

        .addCase(addToLikes, (state, action) => {
            return {
                ...state,
                likes: [...state.likes, action.payload]
            }
        })
        .addCase(removeToLikes, (state, action) => {
            return {
                ...state,
                likes: state.likes.filter((id) => id !== action.payload)
            }
        })
          
)

export default citiesReducers