import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../../redux/store'
import './navbar.scss'

type Props = {}

const Navbar = (props: Props) => {
  const user = useSelector((state: RootState) => state.user.currentUser)
  return (
    <div className="navbar">
      <h1>Awesome Library</h1>
      <ul>
        <Link to="/" className="routerLink">
          Home
        </Link>
        <Link to="/login" className="routerLink">
          {user ? 'signout' : 'login'}
        </Link>
        {user && (
          <Link to="/cart" className="routerLink">
            <i className="fa-solid fa-cart-plus"></i>
          </Link>
        )}
      </ul>
    </div>
  )
}

export default Navbar
