import { Button } from '@mui/material'
import { memo } from 'react'

const Home = () => {
  return (
    <div>
      <Button variant="contained">Click me</Button>
    </div>
  )
}

export default memo(Home)
