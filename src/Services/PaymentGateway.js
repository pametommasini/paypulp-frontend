import axios from 'axios'

class Gateway {
  static getConfig = (token) => {
    return { headers: { Authorization: token } }
  }

  static getProduct = async (productUuid) => {
    const token = localStorage.getItem('token')
    const config = this.getConfig(token)
    // try {
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/private/product/${productUuid}`,
      config,
    )
    if (res.status === 200) {
      return res
    }
  }

  static confirmPayment = async (transactionInfo) => {
    const token = localStorage.getItem('token')
    const config = this.getConfig(token)

    try {
      const res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/private/transaction`,
        transactionInfo,
        config,
      )
      if (res.status === 201) {
        return res
      }
    } catch (error) {
      console.log(error)
    }
  }
}

export default Gateway
