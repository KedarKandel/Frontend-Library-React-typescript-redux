import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { useState } from 'react'
import { Stack } from '@mui/material'

type Props = {}

const Filter = () => {
  const [category, setCategory] = useState<string>('')

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value)
  }

  return (
    <Stack
      sx={{
        padding: '20px',
        backgroundColor: 'white',
        borderRadius: '5px'
      }}>
      <FormControl sx={{ m: 1, minWidth: 100 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Categories</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={category}
          onChange={handleChange}
          autoWidth
          label="Age">
          <MenuItem value={'drama'}>Drama</MenuItem>
          <MenuItem value={'fiction'}>Fiction</MenuItem>
          <MenuItem value={'history'}>History</MenuItem>
          <MenuItem value={'science'}>Science</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )
}

export default Filter
