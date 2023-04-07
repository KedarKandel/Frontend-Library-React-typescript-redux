import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'



import './bookTable.scss'
type Props = {}

const BookTable = ({books}: any) => {

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1050 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
            {books.map((book:any) => (
              <>
              <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {book.status}
                </TableCell>
                <TableCell align="right">{book.authors}</TableCell>
                <TableCell align="right">{book.id}</TableCell>
                <TableCell align="right">{book.title}</TableCell>
                <TableCell align="right">{book.publisher}</TableCell>
                </TableRow>
              </>
            ))}
         
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default BookTable
