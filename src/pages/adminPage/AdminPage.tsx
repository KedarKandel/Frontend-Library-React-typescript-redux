import { useDispatch, useSelector } from 'react-redux'
import './adminPage.scss'
import { AppDispatch, RootState } from '../../redux/store'
import AdminBookItem from '../../components/adminBookItem/AdminBookItem'
import { deleteBook, BookPayload, addBook } from '../../redux/reducers/bookSlice'
import { Book } from '../../interfaces/types'

type Props = {}

const AdminPage = (props: Props) => {
  const books = useSelector((state: RootState) => state.book.items)
  const user = useSelector((state: RootState) => state.user.currentUser)
  const dispatch = useDispatch<AppDispatch>()

  // to add a book

  const handleAddBook = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const newBook: Book = {
      id: (document.getElementById('ID') as HTMLInputElement).value,
      title: (document.getElementById('title') as HTMLInputElement).value,
      isbn: (document.getElementById('isbn') as HTMLInputElement).value,
      description: (document.getElementById('description') as HTMLInputElement).value,
      publisher: (document.getElementById('publisher') as HTMLInputElement).value,
      category: (document.getElementById('category') as HTMLInputElement).value,
      authors: Array.from((document.getElementById('authors') as HTMLInputElement).value),
      publishDate: (document.getElementById('publishedDate') as HTMLInputElement).value,
      availability: (document.getElementById('availability') as HTMLInputElement).value
    }
    dispatch(addBook(newBook))
  }

  // to delete a book
  const handleDeleteBook = (book: Book) => {
    if (user && book) {
      dispatch(deleteBook({ user, book }))
    }
  }

  return (
    <div className="adminPage">
      <div className="sidebar">
        <div className="sidebarWrapper">
          <h2>Welcome Admin!</h2>
          <form onSubmit={handleAddBook}>
            <label htmlFor="title">Id</label>
            <input type="number" id="ID" />
            <label htmlFor="title">Title of the book</label>
            <input type="text" id="title" />
            <label htmlFor="isbn">Isbn</label>
            <input type="text" id="isbn" />
            <label htmlFor="description">Description</label>
            <input type="text" id="description" />
            <label htmlFor="publisher">Publisher</label>
            <input type="text" id="publisher" />
            <label htmlFor="category">Category</label>
            <input type="text" id="category" />
            <label htmlFor="authors">Authors</label>
            <input type="text" id="authors" />
            <label htmlFor="publishedDate">Published date</label>
            <input type="date" id="publishedDate" />
            <label htmlFor="availability">Availability</label>
            <input type="text" id="availability" placeholder="Available or Taken" />
            <button>Add new book</button>
          </form>
        </div>
      </div>
      <div className="adminBookItems">
        {books.map((book) => {
          return <AdminBookItem book={book} onDeleteBook={() => handleDeleteBook(book)} />
        })}
      </div>
    </div>
  )
}

export default AdminPage
