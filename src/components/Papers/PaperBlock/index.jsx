import { Paper } from '@mui/material'

function PaperBlock(props) {
  return (
    <Paper
      elevation={1}
      {...props}
    />
  )
}

export default PaperBlock
