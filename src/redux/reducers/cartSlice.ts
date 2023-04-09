import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book, CartState } from '../../interfaces/types'

const initialState: CartState = {
  items:[],
  quantity: 0
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Book>) => {
      const existingItem = state.items.find((item) => item.book.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ book: action.payload, quantity: 1 })
      }
      state.quantity += 1;
    },
    removeFromCart: (state, action: PayloadAction<Book>) => {
      const existingItem = state.items.find((item) => item.book.id === action.payload.id)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
      } else {
        state.items = state.items.filter((item) => item.book.id !== action.payload.id)
      }
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions

export default cartSlice.reducer
