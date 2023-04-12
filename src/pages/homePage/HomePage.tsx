import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
// components
import BookItem from '../../components/bookItem/BookItem'
import Filter from '../../components/filter/Filter'
import Paginate from '../../components/paginate/Paginate'
import Search from '../../components/search/Search'

// from redux store
import { AppDispatch, RootState } from '../../redux/store'
import { filterBooks, searchBooks } from '../../redux/reducers/bookSlice'

import './homePage.scss'
import { Book } from '../../interfaces/types'
type Props = {}

const HomePage = (props: Props) => {
  //states for search
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [category, setCategory] = useState<string>('')

  // redux state
  const books = useSelector((state: RootState) => state.book.filteredItems)
  const isLoading = useSelector((state: RootState) => state.book.isLoading)
  const error = useSelector((state: RootState) => state.book.error)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(searchBooks({ searchTerm }))
  }, [dispatch, searchTerm])
  
  useEffect(() => {
    dispatch(filterBooks({ category }))
   
  }, [dispatch, category])

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <section className="homePage">
      <div className="filterSearch">
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Filter category={category} setCategory={setCategory} />
      </div>
      <h1 className="heading">Books</h1>
      <div className="bookTable">
        {books && books.length > 0 ? (
          books?.map((book: Book) => {
            return <BookItem key={book.id} book={book} />
          })
        ) : (
          <h1>No books found</h1>
        )}
      </div>
      {/* <Paginate /> */}
    </section>
  )
}

export default HomePage
