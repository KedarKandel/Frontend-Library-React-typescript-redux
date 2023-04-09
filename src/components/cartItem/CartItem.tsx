import { useSelector } from 'react-redux'
import { Book } from '../../interfaces/types'
import './cartItem.scss'
import { RootState } from '../../redux/store'

type Props = {
  book: Book
  quantity: number //use quantity to increase the qty of same item
  onReturnBook: () => void
  onDecrease: () => void
  onIncrease: () => void
}

const CartItem = ({ book, quantity, onIncrease, onDecrease, onReturnBook }: Props) => {
    const cartQty = useSelector((state:RootState)=>state.cart.quantity)
  return (
    <div className="cartItem">
      <div className="bookItemWrapper">
        <h4>{book.title}</h4>
        <p>By: {book.authors.join(', ')}</p>
        <p>{book.publisher}</p>
        <p>{book.publishDate ? book.publishDate.toString() : ''}</p>
      </div>
      <div className='quantity'>
        <span onClick={onDecrease}>--</span>
        <h2>{quantity}</h2>
        <span onClick={onIncrease}>+</span>
      </div>

      <button onClick={onReturnBook}>Return</button>
    </div>
  )
}

export default CartItem
