import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { userContext } from '../Context/UserContext'
import Auth from '../Services/Auth'
import Transactions from '../Services/Transactions'

/**
 *
 * @param {boolean} isOnGateway if redirected from external e-commerce = true
 * @param {boolean} setIsAuth state setter on payment gateway
 * @returns {boolean, function}
 */
export default function useLogin(isOnGateway, setIsAuth) {
  const { setUserInfo, setTransactions, setPaymentMethods } = useContext(userContext)
  const [loginError, setLoginError] = useState(null)
  const navigate = useNavigate()

  // if user is already logged don't allow access to login page
  useEffect(() => {
    if (localStorage.getItem('token') && !isOnGateway) navigate(-1)
  }, [])

  const onSubmit = async (userData) => {
    let userUuid
    // auth req
    try {
      const resLogin = await Auth.login(userData)
      if (resLogin.status === 200) {
        userUuid = resLogin.data.userInfo.userUuid
        localStorage.setItem('token', resLogin.data.token)
        setUserInfo(resLogin.data.userInfo)
        setPaymentMethods(resLogin.data.paymentMethods)
        if (isOnGateway) {
          setIsAuth(true)
          return
        }
      }
    } catch (error) {
      if (error.code === 'ERR_NETWORK') setLoginError(error.code)
      if (error.response?.status === 401) setLoginError(error.response.status)
      console.error(error)
    }
    try {
      const resTransactions = await Transactions.getTransactions(userUuid)
      if (resTransactions.status === 200) setTransactions(resTransactions.data)
    } catch (error) {
      console.log(error)
    }
    navigate('/dashboard')
  }

  return { loginError, setLoginError, onSubmit }
}
