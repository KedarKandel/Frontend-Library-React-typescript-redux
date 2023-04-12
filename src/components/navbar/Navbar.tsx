import { Link } from 'react-router-dom'
import './navbar.scss'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = {}

const Navbar = (props: Props) => {
  const cartQty = useSelector((state:RootState)=>state.cart.quantity)
  return (
    <header className="navbar">
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <h1>e-Library</h1>
        </Link>
      <div className='links'>
        <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
          <span>Home</span>
        </Link>
        <Link to="/admin" style={{ textDecoration: 'none', color: '#fff' }}>
          <span>Admin</span>
        </Link>
      </div>

      <Link to="/cart" style={{ textDecoration: 'none', color: '#fff' }}>
        <div>
          <span>Loans({cartQty})</span>
        </div>
      </Link>
    </header>
  )
}

export default Navbar
