import { Alert, Snackbar } from '@mui/material'
import useTokenValidation from 'Hooks/useTokenValidation'
import { Outlet } from 'react-router-dom'
import NavBar from './Navbar/NavBar'

const MainApp = () => {
  const { tokenError, setTokenError } = useTokenValidation()

  return (
    <main>
      <NavBar />
      <Outlet />
      <Snackbar
        open={tokenError === 'true'}
        autoHideDuration={2000}
        onClose={() => setTokenError(false)}
        message="Note archived">
        <Alert severity="warning">Token validation error</Alert>
      </Snackbar>
    </main>
  )
}

export default MainApp
