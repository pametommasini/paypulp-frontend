import '../../Styles/TrasactionsTable.css'
import TransactionEntry from './TransactionEntry'

const TransactionsTable = ({ transactions }) => {
  // fix date_time to camelCase
  const formatDate = (date_time) => {
    const date = new Date(date_time)
    return date.toLocaleDateString()
  }

  return (
    <div className="transactions-table">
      <div className="transactions-column">
        <div>Seller</div>
        <div>Product</div>
        {/* <div>Seller</div> */}
        <div>Amount</div>
        {/* <div>Payment Method</div> */}
      </div>
      {transactions.length > 0 ? (
        transactions.map((transaction) => (
          <TransactionEntry
            date={formatDate(transaction.date_time)}
            product={transaction.product_name}
            seller={transaction.business_name}
            total={transaction.total_amount}
            payMethod={transaction.card_number}
            key={transaction.transaction_id}
          />
        ))
      ) : (
        <h2 className='dash-empty-msg'>You have no transactions yet</h2>
      )}
    </div>
  )
}

export default TransactionsTable
