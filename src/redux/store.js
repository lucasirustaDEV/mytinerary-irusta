import { configureStore } from '@reduxjs/toolkit'
import citiesReducers from './reducers/citiesReducers'

const store = configureStore({
  reducer: {
    citiesReducers
  },
})

export default store