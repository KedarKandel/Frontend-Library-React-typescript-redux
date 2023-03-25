import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RootState } from '../redux/store'
import './pageStyles/homepage.scss'
type Props = {}

const HomePage = (props: Props) => {

  //user
  const user = useSelector((state: RootState) => state.user.currentUser)

  return (
    <header className="homePage">
      <section className="titles">
        <h1>Books are the best teachers</h1>
        <h3>Welcome to awesome library</h3>
        <h4>Borrow and return🔑. Login to Explore👉</h4>
        <button>
          <Link to={user ? '/bookListPage' : '/login'} style={{textDecoration:"none", color:"teal"}}>Explore Books</Link>
        </button>
      </section>
      <div className="imgWrapper">
        <img
          src="https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/12/Books.jpeg.jpg"
          alt=""
        />
      </div>
    </header>
  )
}

export default HomePage
