import { configureStore } from '@reduxjs/toolkit'
import { authSlice } from './slices/authSlice'
import { baseApi } from './api/apiSlice'

const persistedState = localStorage.getItem('adaState') 
  ? JSON.parse(localStorage.getItem('adaState'))
  : {}
  console.log(persistedState)

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  preloadedState: {
    auth: persistedState
  },
})




// why this is not very good in integrating apis
// store.subscribe(() => {
//     localStorage.setItem('adaState', JSON.stringify(store.getState()))
//   })