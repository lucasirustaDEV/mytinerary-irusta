import { configureStore } from '@reduxjs/toolkit'
import citiesReducers from './reducers/citiesReducers'
import authReducers from './reducers/authReducers';

const store = configureStore({
  reducer: {
    citiesReducers: citiesReducers,
    authReducers: authReducers
  },
});

export default store