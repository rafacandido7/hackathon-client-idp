import { Paper } from '@mui/material'

function PaperBlock(props) {
  return (
    <Paper
      elevation={3}
      {...props}
    />
  )
}

export default PaperBlock
