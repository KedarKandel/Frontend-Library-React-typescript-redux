import { useSelector } from 'react-redux'
import './adminPage.scss'
import { RootState } from '../../redux/store'
import AdminBookItem from '../../components/adminBookItem/AdminBookItem'

type Props = {}

const AdminPage = (props: Props) => {
  const books = useSelector((state: RootState) => state.book.items)
  return (
    <div className="adminPage">
      <div className="sidebar">
        <div className="sidebarWrapper">
          <h2>Welcome Admin!</h2>
          <form action="">
            <label htmlFor="">Title of the book</label>
            <input type="text" />
            <label htmlFor="">Isbn</label>
            <input type="text" />
            <label htmlFor="">Description</label>
            <input type="text" />
            <label htmlFor="">Publisher</label>
            <input type="text" />
            <label htmlFor="">Category</label>
            <input type="text" />
            <label htmlFor="">Authors</label>
            <input type="text" />
            <label htmlFor="">Published date</label>
            <input type="date" />
            <label htmlFor="">Availability</label>
            <input type="text" placeholder='Available or Taken' />
            <button>Add new book</button>
          </form>
        </div>
      </div>
      <div className="adminBookItems">
        {books.map((book) => {
          return <AdminBookItem book={book} />
        })}
      </div>
    </div>
  )
}

export default AdminPage
