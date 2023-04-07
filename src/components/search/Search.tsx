import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import './search.scss'

type Props = {}

const Search = (props: Props) => {
  return (
    <Box
      className="search"
      component="form"
      sx={{
        width: '40rem',
        padding: "5%"
      }}
      noValidate
      autoComplete="off">
      <TextField
        id="outlined-basic"
        label="search books"
        variant="outlined"
        sx={{ width: '20rem' }}
      />
    </Box>
  )
}

export default Search
