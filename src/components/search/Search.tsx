import './search.scss'

type Props = {}

const Search = (props: Props) => {
  return (
    <div className="searchContainer">
      <input type="text" placeholder="search.." />
      <button>Find</button>
    </div>
  )
}

export default Search
