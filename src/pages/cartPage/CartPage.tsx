import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { Book } from '../../interfaces/types'
import CartItem from '../../components/cartItem/CartItem'
import './cartPage.scss'

type Props = {}

const CartPage = (props: Props) => {
  const cartItems = useSelector((state: RootState) => state.cart.items)
  const onReturnBook = () => {}
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
              onReturnBook={onReturnBook}
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
