
import './navbar.scss'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <header className="navbar">
      <h1>Library</h1>
      <div>
        <span>Home</span>
        <span>Books</span>
      </div>
      <div>
        <span>Login</span>
      </div>
    </header>
  )
}

export default Navbar
