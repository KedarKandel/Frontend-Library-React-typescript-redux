import Filter from '../../components/filter/Filter'
import Paginate from '../../components/paginate/Paginate'
import Search from '../../components/search/Search'
import './homePage.scss'
type Props = {}

const HomePage = (props: Props) => {
  return (
    <section className="homePage">
      {/* <Paginate/> */}
      <div className="filterSearch">
        <Search />
        <Filter />
      </div>
      <h1 className="heading">Books</h1>
    </section>
  )
}

export default HomePage
