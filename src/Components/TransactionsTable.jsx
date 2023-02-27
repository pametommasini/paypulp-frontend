import "../Styles/TrasactionsTable.css";
import TransactionEntry from "./TransactionEntry";

const TransactionsTable = ({ transactions }) => {
  // const mock = [
  //   {
  //     id: 1,
  //     date: "12/12/12",
  //     name: "Walkies",
  //     seller: "Gucci",
  //     amount: 123,
  //     payMethod: 123456789,
  //   },
  //   {
  //     id: 2,
  //     date: "12/12/12",
  //     name: "Walkies",
  //     seller: "Gucci",
  //     amount: 123,
  //     payMethod: 123456789,
  //   },
  //   {
  //     id: 3,
  //     date: "12/12/12",
  //     name: "Walkies",
  //     seller: "Gucci",
  //     amount: 123,
  //     payMethod: 123456789,
  //   },
  //   {
  //     id: 4,
  //     date: "12/12/12",
  //     name: "Walkies",
  //     seller: "Gucci",
  //     amount: 123,
  //     payMethod: 123456789,
  //   },
  //   {
  //     id: 5,
  //     date: "12/12/12",
  //     name: "Walkies",
  //     seller: "Gucci",
  //     amount: 123,
  //     payMethod: 123456789,
  //   },
  //   {
  //     id: 6,
  //     date: "12/12/12",
  //     name: "Walkies",
  //     seller: "Gucci",
  //     amount: 123,
  //     payMethod: 123456789,
  //   },
  //   {
  //     id: 7,
  //     date: "12/12/12",
  //     name: "Walkies",
  //     seller: "Gucci",
  //     amount: 123,
  //     payMethod: 123456789,
  //   },
  //   {
  //     id: 18,
  //     date: "12/12/12",
  //     name: "Walkies",
  //     seller: "Gucci",
  //     amount: 123,
  //     payMethod: 123456789,
  //   },
  // ];
  
  const formatDate = (date_time) => {
    const date = new Date(date_time);
    return date.toLocaleDateString();
  }

  return (
    <div className="transactions-table">
      <div className="transactions-column">
        <div>Date</div>
        <div>Product</div>
        <div>Seller</div>
        <div>Amount</div>
        <div>Payment Method</div>
      </div>
      {transactions.map((transaction) => (
        <TransactionEntry
          date={formatDate(transaction.date_time)}
          product={transaction.product_name}
          seller={transaction.business_name}
          amount={transaction.total_amount}
          payMethod={transaction.card_number}
          key={transaction.transaction_id}
        />
      ))}
    </div>
  );
};

export default TransactionsTable;
