const FakeStore = () => {
  const goToPayment = async () => {
    const sellerInfo = {
      productUuid: '123456789011',
      businessUuid: '78e9923e-15e0-44c9-9227-8edf38ee7193',
      redirectUrl: 'http://localhost:3000/fakestore',
    }
    window.location.href = `http://localhost:3000/gateway/${sellerInfo.productUuid}?businessuuid=${sellerInfo.businessUuid}&redirecturl=${sellerInfo.redirectUrl}`
  }

  return (
    <div>
      <div>Product: xxx-xxx</div>
      <button onClick={goToPayment}>Buy</button>
    </div>
  )
}

export default FakeStore
