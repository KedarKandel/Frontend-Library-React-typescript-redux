export type User = {
  name: string
  email: string
  role: 'Admin' | 'Visitor'
}

export type UserState = {
  currentUser: User | null
  isLoggedIn: boolean
  error: string | null
}

export type Book = {
  id: string | number
  isbn: string
  title: string
  description: string
  publisher: string
  authors: string[]
  status: boolean
  borrowerId?: string
  publishDate: Date
  borrowDate?: Date
  returnDate?: Date
  noOfCopies: number
}

export type BookState = {
  items: Book[]
  isLoading: boolean
  error: string | null
}

export type CartItem = {
  book: Book
  quantity: number
}

export type CartState = {
  items: CartItem[],
  quantity: number
}


