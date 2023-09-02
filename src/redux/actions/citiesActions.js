import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllCitiesAsync = createAsyncThunk('getAllCitiesAsync', async ( query = '' ) => {
    try {
        const res = await axios.get('http://localhost:3000/api/cities' + query)
        return res.data.response
    } catch (err) {
        console.log(err)        
        return []
    }
})

const getOneCityAsync = createAsyncThunk('getOneCityAsync', async ( cityId ) => {
    try {
        const res = await axios.get('http://localhost:3000/api/cities/' + cityId)
        return res.data.response
    } catch (err) {
        console.log(err)        
        return []
    }
})

const getItinerariesByCityIdAsync = createAsyncThunk('getItinerariesByCityIdAsync', async ( cityId ) => {
    try {
        const res = await axios.get('http://localhost:3000/api/itineraries?city=' + cityId)
        return res.data.response
    } catch (err) {
        console.log(err)        
        return []
    }
})

const setSearch = createAction('searchCity', ( search ) => {
    return {
        payload: search
    }
})

const addToLikes = createAction('addToLikes', ( itineraryId ) => {
    return {
        payload: itineraryId
    }
})

const removeToLikes = createAction('removeToLikes', ( itineraryId ) => {
    return {
        payload: itineraryId
    }
})

export { getAllCitiesAsync, getOneCityAsync, getItinerariesByCityIdAsync, setSearch, addToLikes, removeToLikes }