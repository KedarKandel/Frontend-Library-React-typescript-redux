import { useDispatch, useSelector } from 'react-redux'

import { AppDispatch, RootState } from '../../redux/store'
import AdminBookItem from '../../components/adminBookItem/AdminBookItem'
import { deleteBook, BookPayload, addBook, updateBook } from '../../redux/reducers/bookSlice'
import { Book } from '../../interfaces/types'
import {  useState } from 'react'
import UpdateForm from '../../components/updateForm/UpdateForm'
import './adminPage.scss'
type Props = {}

const AdminPage = (props: Props) => {
  const books = useSelector((state: RootState) => state.book.items)
  const user = useSelector((state: RootState) => state.user.currentUser)
  const dispatch = useDispatch<AppDispatch>()

  // states
  const [isOpen, setIsOpen] = useState(false)
  const [selectedBook, setSelectedBook] = useState<Book | null>(null)
  const [isAdded, setIsAdded] = useState<boolean>(false)
  const [addMessage, setAddMessage] = useState<String>('')
 

  // to add a book
  const handleAddBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newBook: Book = {
      title: (document.getElementById('title') as HTMLInputElement).value,
      isbn: (document.getElementById('isbn') as HTMLInputElement).value,
      description: (document.getElementById('description') as HTMLInputElement).value,
      publisher: (document.getElementById('publisher') as HTMLInputElement).value,
      category: (document.getElementById('category') as HTMLInputElement).value,
      authors: Array.from(
        (document.getElementById('authors') as HTMLInputElement).value.split(',')
      ),
      publishDate: (document.getElementById('publishedDate') as HTMLInputElement).value,
      availability: (document.getElementById('availability') as HTMLInputElement).value
    }
    dispatch(addBook(newBook))
    // Reset the form
    event.currentTarget.reset()

    //show notification
    setIsAdded(true)
    setAddMessage('book added successfully')

    // Set the interval and store its ID
    // Clear the message after 2 seconds
    setTimeout(() => {
      setIsAdded(false)
      setAddMessage('')
    }, 2000)
  }

  // to delete a book
  const handleDeleteBook = (book: Book) => {
    if (user && book) {
      dispatch(deleteBook({ user, book }))
    }
  }

  // to update a book
  const handleUpdateBook = (book: Book) => {
    setSelectedBook(book)
    setIsOpen(true)
   
  }

  const handleSubmitUpdateForm = (updatedBook: Book) => {
    if (user && selectedBook) {
      dispatch(updateBook({ user, book: selectedBook, updatedBook }))
      setSelectedBook(null)
      setIsOpen(false)
    }
  }

  return (
    <div className="adminPage">
      <div className="sidebar">
        <div className="sidebarWrapper">
          <h2>Welcome Admin!</h2>
          <form onSubmit={handleAddBook}>
            <label htmlFor="title">Title of the book</label>
            <input type="text" id="title" required />
            <label htmlFor="isbn">Isbn</label>
            <input type="text" id="isbn" required />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" required />
            <label htmlFor="publisher">Publisher</label>
            <input type="text" id="publisher" required />
            <label htmlFor="category">Category</label>
            <input type="text" id="category" required />
            <label htmlFor="authors">Authors</label>
            <input type="text" id="authors" required />
            <label htmlFor="publishedDate">Published date</label>
            <input type="date" id="publishedDate" required />
            <label htmlFor="availability">Availability</label>
            <input type="text" id="availability" placeholder="Available or Taken" required />
            {isAdded && <span>{addMessage}</span>}
            <button>Add new book</button>
          </form>
        </div>
      </div>
      <div className="adminBookItems">
        {books.map((book) => {
          return (
            <div>
              <AdminBookItem
                book={book}
                onDeleteBook={() => handleDeleteBook(book)}
                onUpdateBook={() => handleUpdateBook(book)}
              />
              {isOpen && selectedBook && selectedBook.id === book.id && (
                <UpdateForm
                  book={selectedBook}
                  onUpdateBook={handleSubmitUpdateForm}
                  setIsOpen={setIsOpen}
               
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default AdminPage
