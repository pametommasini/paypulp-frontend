import { useContext, useEffect, useState } from 'react'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import { userContext } from '../Context/UserContext'
import ConfirmPurchase from '../Components/ConfirmPurchase'
import Submitting from '../Components/Submitting'
import PaymentGateway from '../Services/PaymentGateway'
import Logo from '../Assets/Paypulptr.png'
import '../Styles/PaymentView.css'
import Login from './Public/Login'

const PaymentView = () => {
  const { userInfo, paymentMethods } = useContext(userContext)
  const { productUuid } = useLoaderData()
  const [searchParams] = useSearchParams()
  const [isAuth, setIsAuth] = useState(false)
  const [product, setProduct] = useState(null)
  const [submitState, setSubmitState] = useState(null)

  useEffect(() => {
    if (isAuth && submitState === null) {
      const getProduct = async () => {
        const res = await PaymentGateway.getProduct(productUuid)
        setProduct(res.data[0])
      }
      getProduct()
    }
    if (submitState === 'success') {
      setTimeout(goBack, 4000)
    }
  }, [isAuth, submitState])

  const goBack = () => {
    // searchParams.get parse query to string
    const redirUrl = searchParams.get('redirecturl')
    window.location.replace(`${redirUrl}`)
  }

  return (
    <div className="vp">
      <div className="pay-bar">
        <img className="logo" src={Logo} alt="PayPulp logo" />
      </div>
      {!isAuth && !submitState && <Login setIsAuth={setIsAuth} />}
      {isAuth && !submitState && (
        <ConfirmPurchase
          product={product}
          userInfo={userInfo}
          paymentMethods={paymentMethods}
          setSubmitState={setSubmitState}
        />
      )}
      {submitState && <Submitting submitState={submitState} goBack={goBack} location="gateway" />}
      {submitState === 'success' && (
        <>
          <div>If you&apos;re not redirected after 4 seconds click here:</div>
          <button onClick={goBack}>Leave this place</button>
        </>
      )}
    </div>
  )
}

export default PaymentView
