import { Container } from '@mui/material'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'

const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <Container fixed>
        <Outlet />
      </Container>
    </div>
  )
}

export default MainLayout
