import { Link } from 'react-router-dom'
import BookItem from '../components/bookItem/BookItem'
import Filter from '../components/filter/Filter'
import Search from '../components/search/Search'
import './pageStyles/bookListPage.scss'

type Props = {}

const styles = {
  textDecoration: 'none',
  color: 'darkBlue'
}

const BookListPage = (props: Props) => {
  return (
    <header className="booklistContainer">
      <div className="searchFilter">
        <Search />
        <Filter />
      </div>
      <div className="bookLists">
        <Link to="/book/:id" style={styles}>
          <BookItem />
        </Link>
        <Link to="/book/:id" style={styles}>
          <BookItem />
        </Link>
        <Link to="/book/:id" style={styles}>
          <BookItem />
        </Link>
        <Link to="/book/:id" style={styles}>
          <BookItem />
        </Link>
      </div>
    </header>
  )
}

export default BookListPage
