import './bookItem.scss'

type Props = {}

const BookItem = (props: Props) => {
  return (
    <div className="bookItem">
      <h3>Book</h3>
      <h1>Old man and the sea</h1>
      <p>This is a story of life </p>
      <span>Author: Paulo colho</span>
      <span>
        status <small>available</small>
      </span>
    </div>
  )
}

export default BookItem
