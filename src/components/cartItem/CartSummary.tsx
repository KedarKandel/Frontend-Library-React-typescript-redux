import './cartItem.scss'

type Props = {}

const CartSummary = (props: Props) => {
  return (
    <section className="summary">
      <button
        className="btn"
        style={{ backgroundColor: 'black', color: '#fff', marginBottom: '30%' }}>
        Clear Cart
      </button>
      <h2>Summary</h2>
      <div>
        <span>Total Quantity:</span>
        <span>0</span>
      </div>
      <div>
        <span>Total Price: </span>
        <span>0</span>
      </div>
      <button className="btn">Checkout</button>
    </section>
  )
}

export default CartSummary
