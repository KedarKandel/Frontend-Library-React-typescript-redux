import { useDispatch, useSelector } from 'react-redux'
import BookTable from '../../components/bookTable/BookTable'
import Filter from '../../components/filter/Filter'
import Paginate from '../../components/paginate/Paginate'
import Search from '../../components/search/Search'
import { AppDispatch, RootState } from '../../redux/store'
import './homePage.scss'
import { useEffect } from 'react'
import { fetchBooksThunk } from '../../redux/reducers/bookSlice'
type Props = {}

const HomePage = (props: Props) => {
  const books = useSelector((state: RootState) => state.book.items)
  const isLoading = useSelector((state: RootState) => state.book.isLoading)
  const error = useSelector((state: RootState) => state.book.error)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(fetchBooksThunk())
  }, [dispatch])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <section className="homePage">
      {/* <Paginate/> */}
      <div className="filterSearch">
        <Search />
        <Filter />
      </div>
      <h1 className="heading">Books</h1>
      <div className="bookTable">
        <BookTable books={books}/>
      </div>
    </section>
  )
}

export default HomePage
