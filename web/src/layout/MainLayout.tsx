import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <Container fixed>
      <Outlet />
    </Container>
  )
}

export default MainLayout
