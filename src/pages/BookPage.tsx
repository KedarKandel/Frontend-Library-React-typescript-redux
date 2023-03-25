import { Link } from 'react-router-dom'
import BookItem from '../components/bookItem/BookItem'
import './pageStyles/bookPage.scss'

type Props = {}

const BookPage = (props: Props) => {
  return (
    <section className="bookPageContainer">
      <div className="img">
        <img
          src="https://bestlifeonline.com/wp-content/uploads/sites/3/2020/10/A-Tale-of-Two-Cities-Cover.jpg"
          alt=""
        />
      </div>
      <div className="bookDetails">
        <h1>The Tale Of Two Cities</h1>
        <p>
          
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui mollitia beatae, explicabo
          necessitatibus porro eaque dignissimos provident neque est vero. Dicta vero voluptatem
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui mollitia beatae, explicabo
          necessitatibus porro eaque dignissimos provident neque est vero. Dicta vero voluptatem
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui mollitia beatae, explicabo
          necessitatibus porro eaque dignissimos provident neque est vero. Dicta vero voluptatem
          reprehenderit blanditiis sequi, Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Qui mollitia beatae, explicabo necessitatibus porro eaque dignissimos provident neque est
          vero. Dicta vero voluptatem reprehenderit blanditiis sequi, eaque repellendus veniam culpa
         
        </p>
      </div>
      <div className="borrowDetails">
        <Link to=".." style={{textDecoration:"none"}}><p>👈🏿back</p></Link>
        <h1>Best Seller</h1>
        <label>Isbn: 1233ss5</label>
        <label className="available">This is available</label>
        <label className="unavailable">This is unavailable</label>
        <button><Link to="/cart" className='routerLink'>borrow/return</Link></button>
      </div>
    </section>
  )
}

export default BookPage
