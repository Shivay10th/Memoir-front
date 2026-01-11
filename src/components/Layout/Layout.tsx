import { Outlet } from 'react-router'
import Header from '../Header/Header'
import { Container } from '../styles'
const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  )
}

export default Layout
