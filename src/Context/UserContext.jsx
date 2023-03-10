import { createContext, useState } from 'react'

export const userContext = createContext(null)

const UserContext = ({ children }) => {
  const [userInfo, setUserInfo] = useState({})
  const [transactions, setTransactions] = useState([])
  const [paymentMethods, setPaymentMethods] = useState([])

  return (
    <userContext.Provider
      value={{
        userInfo,
        setUserInfo,
        transactions,
        setTransactions,
        paymentMethods,
        setPaymentMethods,
      }}>
      {children}
    </userContext.Provider>
  )
}

export default UserContext
