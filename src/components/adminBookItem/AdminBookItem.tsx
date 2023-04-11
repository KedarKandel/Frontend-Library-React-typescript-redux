import { useState } from 'react'
import { Book } from '../../interfaces/types'
import './adminBookItem.scss'

type Props = {
  book: Book
  onDeleteBook: () => void
  onUpdateBook: ()=>void
}

const AdminBookItem = ({ book, onUpdateBook, onDeleteBook }: Props) => {
  
  return (
    <div className="bookItem">
      <div className="bookItemWrapper">
        <h4>{book.title}</h4>
        <p>By:-{book.authors}</p>
        <p>{book.publisher}</p>
        <p>{book.publishDate ? book.publishDate.toString() : ''}</p>
        <small>{book.availability}</small>
      </div>
      <div className="adminButtons">
        <button onClick={onDeleteBook}>Delete</button>
        <button onClick={onUpdateBook}>Update</button>
      </div>
    </div>
  )
}

export default AdminBookItem
