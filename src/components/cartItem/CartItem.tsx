import { Book } from '../../interfaces/types'
import './cartItem.scss'

type Props = {
  book: Book
  quantity: number //use quantity to increase the qty of same item
  onReturnBook: () => void
}

const CartItem = ({ book, quantity, onReturnBook }: Props) => {
  return (
    <div className="cartItem">
      <div className="bookItemWrapper">
        <h4>{book.title}</h4>
        <p>By: {book.authors.join(', ')}</p>
        <p>{book.publisher}</p>
        <p>{book.publishDate ? book.publishDate.toString() : ''}</p>
      </div>
      <div className='quantity'>
        <span>--</span>
        <h2>{quantity}</h2>
        <span>+</span>
      </div>

      <button onClick={onReturnBook}>Return</button>
    </div>
  )
}

export default CartItem
