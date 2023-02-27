import { useContext, useEffect } from "react";
import CardImage from "../Components/CardImage";
import DashboardCard from "../Components/DashboardCard";
import TransactionsTable from "../Components/TransactionsTable";
import { userContext } from "../Context/UserContext";
import Transactions from "../Services/Transactions";
import "../Styles/Dashboard.css";

const Dashboard = () => {
  const { userInfo, transactions, setTransactions } = useContext(userContext);
  
  useEffect(() => {
    const getTransactions = async () => {
      const res = await Transactions.getTransactions(userInfo.userUuid, 10);
      if (res.status === 200) setTransactions(res.data);
    }
    getTransactions()
  }, [userInfo])
  
  return (
    <section className="dashboard">
      <div className="dash-title-wrapper">
        <h2 className="dash-title">Welcome, {userInfo?.firstName}</h2>
      </div>
      <DashboardCard className="dash-transactions" title="Recent Transactions" >
        {transactions.length > 0 ? <TransactionsTable transactions={transactions} /> : <h2>You have no transactions yet</h2> }
      </DashboardCard>
      <DashboardCard className="dash-pay-method" title="Main Payment Method" >
        <CardImage />
      </DashboardCard>
    </section>
  );
};

export default Dashboard;
