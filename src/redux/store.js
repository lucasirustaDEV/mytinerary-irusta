import { configureStore } from '@reduxjs/toolkit'
import citiesReducers from './reducers/citiesReducers'

const store = configureStore({
  reducer: {
    citiesReducers: citiesReducers
  },
});

export default store