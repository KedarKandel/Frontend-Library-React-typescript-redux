import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

import './paginate.scss'

type Props = {}

const Paginate = (props: Props) => {
  return (
    <Stack spacing={2}>
      <Pagination count={10} color="secondary" />
    </Stack>
  )
}

export default Paginate
