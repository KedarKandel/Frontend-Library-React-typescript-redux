import { useDispatch} from 'react-redux'
import { AppDispatch } from '../../redux/store'
import {addToCart} from "../../redux/reducers/cartSlice"

import { Book } from '../../interfaces/types'
import './bookItem.scss'

type Props = {
  book: Book
}

const BookItem = ({ book }: Props) => {
  const dispatch = useDispatch<AppDispatch>()
  const handleAddToCart =()=>{
    dispatch(addToCart(book))
  }
  return (
    <div className="bookItem">
      <div className="bookItemWrapper">
        <h4>{book.title}</h4>
        <p>By:-{book.authors}</p>
        <p>{book.publisher}</p>
        <p>{book.publishDate ? book.publishDate.toString() : ''}</p>
        <small>{book.availability}</small>
      </div>
      
      <button disabled={book.availability !== 'Available'} onClick={handleAddToCart} >Borrow</button>
    </div>
  )
}

export default BookItem
