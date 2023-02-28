import DashboardCard from '../Components/DashboardCard'
import '../Styles/FakeStore.css'

const FakeStore = () => {
  const goToPayment = async () => {
    const sellerInfo = {
      productUuid: '123456789011',
      businessUuid: '78e9923e-15e0-44c9-9227-8edf38ee7193',
      redirectUrl: 'http://localhost:3000/fakestore',
    }
    window.location.href = `http://localhost:3000/gateway/${sellerInfo.productUuid}?businessuuid=${sellerInfo.businessUuid}&redirecturl=${sellerInfo.redirectUrl}`
  }

  const fakeItems = () => {
    const itemsArr = []
    const element = (key) => {
      return (
        <DashboardCard className="fake-prod-card" key={key}>
          <div className="fake-inner-card">
            <div>Manzanas</div>
            <div>$100</div>
            <button className="fake-btn" onClick={goToPayment}>
              Buy
            </button>
          </div>
        </DashboardCard>
      )
    }
    for (let i = 0; i < 15; i++) {
      itemsArr.push(element(i))
    }
    return itemsArr
  }

  return (
    <>
      <div className="fake-nav">
        <h2>Logo</h2>
        <div>Menu</div>
      </div>
      <div className="fake-main">
        <h1 className="fake-title">!!! FAKE STORE !!!</h1>
        <div className="fake-items-grid">{fakeItems()}</div>
      </div>
    </>
  )
}

export default FakeStore
