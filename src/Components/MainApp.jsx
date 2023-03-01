import { useContext, useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { userContext } from '../Context/UserContext'
import UserInfo from '../Services/User'
import NavBar from './Navbar/NavBar'

const MainApp = () => {
  const { userInfo, setUserInfo } = useContext(userContext)
  const navigate = useNavigate()

  // if token is active, get customer info
  useEffect(() => {
    if (localStorage.getItem('token') && Object.keys(userInfo).length === 0) {
      const getUserInfo = async () => {
        try {
          const res = await UserInfo.getUserInfo()
          setUserInfo(res.data)
          console.log(res)
        } catch (error) {
          console.error(error.response.data)
          localStorage.clear()
          navigate('/login')
        }
      }
      getUserInfo()
    }
  }, [])

  return (
    <main>
      <NavBar />
      <Outlet />
    </main>
  )
}

export default MainApp
