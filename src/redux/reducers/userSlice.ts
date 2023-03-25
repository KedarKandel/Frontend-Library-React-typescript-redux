import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, UserState } from '../../interfaces/types'

// const initialState: UserState = {
//   currentUser: null,
//   isLoggedIn: false,
//   error: null
// }

const initialState: UserState = {
  currentUser: {
    name: 'Kedar',
    email: 'ked@gmail.com',
    role: 'Admin'
  },
  isLoggedIn: true,
  error: null
}

const userSlice = createSlice({
  name: 'currentUser',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      state.isLoggedIn = true
      state.currentUser = action.payload
    },
    logout: (state) => {
      state.isLoggedIn = false
      state.currentUser = null
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }
  }
})

export const { login, logout, setError } = userSlice.actions

export default userSlice.reducer
