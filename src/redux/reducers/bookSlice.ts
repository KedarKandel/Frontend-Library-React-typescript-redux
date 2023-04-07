import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { User, Book, BookState } from '../../interfaces/types'

interface BookPayload {
  book: Book
  user: User
}

const initialState: BookState = {
  items: [],
  isLoading: false,
  error: null
}

export const fetchBooksThunk = createAsyncThunk('books/fetch', async () => {
  const response = await fetch('http://localhost:5173/books.json')
  const books = await response.json()
  return books.data
})

export const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.items.push(action.payload)
    },
    deleteBook: (state, action: PayloadAction<BookPayload>) => {
      const { book, user } = action.payload
      if (user.role === 'Admin') {
        state.items = state.items.filter((item) => item.id !== book.id)
      } else {
        state.error = 'You do not have permission to delete this book.'
      }
    },
    updateBook: (state, action: PayloadAction<BookPayload>) => {
      const { book, user } = action.payload
      if (user.role === 'Admin') {
        const index = state.items.findIndex((item) => item.id === book.id)
        if (index !== -1) {
          state.items[index] = book
        }
      } else {
        state.error = 'You do not have permission to update this book.'
      }
    },
    setBooks: (state, action: PayloadAction<Book[]>) => {
      state.items = action.payload
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
    setError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    }, 
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBooksThunk.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(fetchBooksThunk.fulfilled, (state, action) => {
      state.isLoading = false
      state.items = action.payload
     
    })
    builder.addCase(fetchBooksThunk.rejected, (state, action: PayloadAction<any>) => {
      state.isLoading = false
      state.error = action.payload
    })
  }
})

export const { addBook, deleteBook, updateBook, setBooks, setLoading, setError } = bookSlice.actions

export default bookSlice.reducer
