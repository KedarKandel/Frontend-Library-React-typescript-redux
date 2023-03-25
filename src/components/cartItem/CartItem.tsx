import './cartItem.scss'

type Props = {}

const CartItem = (props: Props) => {
  return (
    <header className="cartItemContainer">
      <section className="itemContainer">
        <img
          src="https://i5.walmartimages.com/asr/ac841cbf-5df2-43f7-be2e-f9eb33be957b_1.a2c623b4f9c7a642930e8b1d511b4a19.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
          alt=""
        />
        <div className="addRemoveDiv">
          <h2>Happiness("Khusi")</h2>
          <div className="icons">
            <i className="fa-solid fa-plus"></i>
            <h4>Quantity: <strong>01</strong></h4>
            <i className="fa-solid fa-minus"></i>
          </div>
        </div>
        <div className="checkout">
            <span>Charge</span>
          <span>€ 20</span>
        </div>
      </section>
      
    </header>
  )
}

export default CartItem
