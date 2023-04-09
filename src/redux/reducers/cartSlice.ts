import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Book, CartState } from '../../interfaces/types'

const initialState: CartState = {
  items:[],
  quantity: 0,
  borrowedBooks:[]
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
   
    increaseCartItemQuantity: (state, action: PayloadAction<Book>) => {
      const existingItem = state.items.find((item) => item.book.id === action.payload.id)
      if (existingItem) {
        existingItem.quantity += 1
        state.quantity += 1
      }
    },
    decreaseCartItemQuantity: (state, action: PayloadAction<Book>) => {
      const existingItem = state.items.find((item) => item.book.id === action.payload.id)
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1
        state.quantity -= 1
      }
    },
    returnBook: (state: CartState, action: PayloadAction<Book>) => {
      const existingItemIndex = state.items.findIndex((item) => item.book.id === action.payload.id);
    
      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // create a new array with all the books of the cart item being removed
          const borrowedBooks: Book[] = Array(existingItem.quantity).fill(existingItem.book);
          state.items = state.items.filter((item) => item.book.id !== action.payload.id);
          // add the borrowed books to the state.cart.borrowedBooks array
          state.borrowedBooks = state.borrowedBooks.concat(borrowedBooks);
        }
        state.quantity -= 1;
      }
    },
    
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, decreaseCartItemQuantity, increaseCartItemQuantity, returnBook, clearCart } = cartSlice.actions

export default cartSlice.reducer
