import { Link } from 'react-router-dom'
import './navbar.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = {}

const Navbar = (props: Props) => {
  const cartQty = useSelector((state:RootState)=>state.cart.quantity)
  return (
    <header className="navbar">
      <h1>Library</h1>
      <div>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <span>Home</span>
        </Link>
        <Link to="/admin" style={{ textDecoration: 'none', color: '#fff' }}>
          <span>Admin</span>
        </Link>
      </div>

      <Link to="/cart" style={{ textDecoration: 'none', color: '#fff' }}>
        <div>
          <span>Cart({cartQty})</span>
        </div>
      </Link>
    </header>
  )
}

export default Navbar
