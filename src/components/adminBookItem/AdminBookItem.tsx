import { Book } from "../../interfaces/types"
import "./adminBookItem.scss"

type Props = {
    book: Book
}

const AdminBookItem = ({book}: Props) => {
  return (
    <div className="bookItem">
    <div className="bookItemWrapper">
      <h4>{book.title}</h4>
      <p>By:-{book.authors}</p>
      <p>{book.publisher}</p>
      <p>{book.publishDate ? book.publishDate.toString() : ''}</p>
      <small>{book.status}</small>
    </div>
    <div className="adminButtons">
    <button>Delete</button>
    <button>Update</button>
    </div>
    
  </div>
  )
}

export default AdminBookItem