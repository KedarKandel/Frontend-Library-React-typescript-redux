import CartItem from '../components/cartItem/CartItem'
import CartSummary from '../components/cartItem/CartSummary'
import './pageStyles/cartPage.scss'

type Props = {}

const CartPage = (props: Props) => {
  return (
    <header className="cartPageContainer">
      <h1>Your Cart </h1>
      <section className="cartComponents">
        <div className='items'>
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
        <div className='summary'>
          <CartSummary />
        </div>
      </section>
    </header>
  )
}

export default CartPage
