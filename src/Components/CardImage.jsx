import '../Styles/CardImage.css'
import { userContext } from '../Context/UserContext'
import { useContext } from 'react'

const CardImage = () => {
  const { userInfo } = useContext(userContext)

  const formatCardNumber = () => {
    if (userInfo.cardNumber) {
      const { cardNumber } = userInfo
      const length = cardNumber.length
      const lastNums = cardNumber.substring(length - 5, length - 1)
      return `**** **** **** ${lastNums}`
    }
  }

  return (
    <div className="card-container">
      <div className="card-background">
        <div className="card">
          <div className="card__top-info">
            <div>{userInfo?.cardType || 'bank'}</div>
          </div>
          <div className="card__owner-info">
            <div>{userInfo?.cardName || 'name'}</div>
            <div>{formatCardNumber()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardImage
