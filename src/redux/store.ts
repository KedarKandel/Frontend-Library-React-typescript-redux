import { configureStore } from '@reduxjs/toolkit'
import bookReducer from './reducers/bookSlice'
import cartReducer from './reducers/cartSlice'
import userReducer from './reducers/userSlice'

export const store = configureStore({
  reducer: {
    user: userReducer,
    book: bookReducer,
    cart: cartReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
