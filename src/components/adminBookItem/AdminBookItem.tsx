import { Book } from '../../interfaces/types'
import './adminBookItem.scss'

type Props = {
  book: Book
  onDeleteBook: () => void
}

const AdminBookItem = ({ book, onDeleteBook }: Props) => {
  return (
    <div className="bookItem">
      <div className="bookItemWrapper">
        <h4>{book.id}</h4>
        <p>By:-{book.authors}</p>
        <p>{book.publisher}</p>
        <p>{book.publishDate ? book.publishDate.toString() : ''}</p>
        <small>{book.availability}</small>
      </div>
      <div className="adminButtons">
        <button onClick={onDeleteBook}>Delete</button>
        <button>Update</button>
      </div>
    </div>
  )
}

export default AdminBookItem
