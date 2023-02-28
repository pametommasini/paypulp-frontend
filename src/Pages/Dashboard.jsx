import { useContext } from 'react'
import CardImage from '../Components/CardImage'
import DashboardCard from '../Components/DashboardCard'
import TransactionsTable from '../Components/TransactionsTable'
import { userContext } from '../Context/UserContext'
import '../Styles/Dashboard.css'

const Dashboard = () => {
  const { userInfo, transactions } = useContext(userContext)
  return (
    <section className="dashboard">
      <div className="dash-title-wrapper">
        <h2 className="dash-title">Welcome, {userInfo?.firstName}</h2>
      </div>
      <DashboardCard className="dash-transactions" title="Recent Transactions">
        {transactions.length > 0 ? (
          <TransactionsTable transactions={transactions} />
        ) : (
          <h2>You have no transactions yet</h2>
        )}
      </DashboardCard>
      <DashboardCard className="dash-pay-method" title="Main Payment Method">
        <CardImage />
      </DashboardCard>
    </section>
  )
}

export default Dashboard
