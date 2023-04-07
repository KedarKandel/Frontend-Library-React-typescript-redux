
import Paginate from '../../components/paginate/Paginate'
import Search from '../../components/search/Search'
import './homePage.scss'
type Props = {}

const HomePage = (props: Props) => {
  return (
    <div className='homePage'>
     {/* <Paginate/> */}
     <Search/>
    </div>
  )
}

export default HomePage
