import { Paper } from '@mui/material'

function PaperBlock(props) {
  return (
    <Paper
      elevation={4}
      sx={{
        borderRadius: '15px',
      }}
      {...props}
    />
  )
}

export default PaperBlock
