import axios from 'axios'

export default class PaymentMethods {
  static getConfig = (token) => {
    return { headers: { Authorization: token } }
  }

  static getDefaultPaymentMethod = async (userUuid) => {
    const token = localStorage.getItem('token')
    const config = this.getConfig(token)

    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/private/user/${userUuid}/paymentmethods`,
      config,
    )
    if (res.status === 200) {
      return res
    }
  }
}
