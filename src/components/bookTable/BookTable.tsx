//import libraries
import { Link } from 'react-router-dom'

//material ui components
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

import { Book } from '../../interfaces/types'
import './bookTable.scss'

type Props = {
  books: Book[]
}

const BookTable = ({ books }: Props) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Title</TableCell>
            <TableCell align="center">Isbn</TableCell>
            <TableCell align="center">Description</TableCell>
            <TableCell align="center">Authors</TableCell>
            <TableCell align="center">publishDate</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books.map((book:any) => (
            <>
              <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }}>
                <TableCell component="th" scope="row">
                  {book.title}
                </TableCell>
                <TableCell align="right">{book.isbn}</TableCell>
                <TableCell align="right">{book.description}</TableCell>
                <TableCell align="right">{book.authors}</TableCell>
                <TableCell align="right">{book.publishDate}</TableCell>
                <TableCell align="right" style={{ color: 'black', fontWeight: '600' }}>
                  {book.status}
                </TableCell>
              </TableRow>
            </>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BookTable
