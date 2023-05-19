import { memo } from 'react'
import { Button } from '@mui/material'

const Home = () => {
  return (
    <div>
      <Button variant="contained">Click me</Button>
    </div>
  )
}

export default memo(Home)
