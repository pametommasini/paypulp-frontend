import useTokenValidation from 'Hooks/useTokenValidation'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar/NavBar'

const MainApp = () => {
  const { tokenError } = useTokenValidation()

  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default MainApp
