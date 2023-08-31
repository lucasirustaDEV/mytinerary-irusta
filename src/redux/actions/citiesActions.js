import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllCitiesAsync = createAsyncThunk('getAllCitiesAsync', async () => {
    try {
        const res = await axios.get('http://localhost:3000/api/cities')
        return res.data.response
    } catch (err) {
        console.log(err)        
        return []
    }
})

const getOneCityAsync = createAsyncThunk('getOneCityAsync', async ({ id }) => {
    try {
        const res = await axios.get('http://localhost:3000/api/cities/' + id)
        return res.data.response
    } catch (err) {
        console.log(err)        
        return []
    }
})

export { getAllCitiesAsync, getOneCityAsync }