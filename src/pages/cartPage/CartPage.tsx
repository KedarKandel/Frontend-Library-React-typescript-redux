import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { Book } from '../../interfaces/types'
import CartItem from '../../components/cartItem/CartItem'
import './cartPage.scss'
import {
  decreaseCartItemQuantity,
  increaseCartItemQuantity,
  returnBook
} from '../../redux/reducers/cartSlice'

type Props = {}

const CartPage = (props: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const dispatch = useDispatch<AppDispatch>()

  //handle increase and decrease of specific cartItem
  const handleDecrease = (book: Book) => {
    dispatch(decreaseCartItemQuantity(book))
  }

  const handleIncrease = (book: Book) => {
    dispatch(increaseCartItemQuantity(book))
  }

  //return a book
  const handleReturnTheBook = (book: Book) => {
    dispatch(returnBook(book))
  }

  return (
    <div className="cartPage">
      <h1 className="cartPage__heading">Your Cart</h1>
      {cartItems.length > 0 ? (
        <div className="cartPage__items">
          {cartItems.map((cartItem) => (
            <CartItem
              key={cartItem.book.id}
              book={cartItem.book}
              quantity={cartItem.quantity}
              onReturnBook={() => handleReturnTheBook(cartItem.book)}
              onDecrease={() => handleDecrease(cartItem.book)}
              onIncrease={() => handleIncrease(cartItem.book)}
            />
          ))}
        </div>
      ) : (
        <div className="cartPage__empty">Your cart is empty.</div>
      )}
    </div>
  )
}

export default CartPage
