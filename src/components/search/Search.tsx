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
        padding:"20px",
        backgroundColor:"white",
        borderRadius:"5px"
      }}
      noValidate
      autoComplete="off">
      <TextField id="outlined-basic" label="search books ..." variant="outlined" />
    </Box>
  )
}

export default Search
