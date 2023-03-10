const TransactionEntry = ({ date, product, seller, total, payMethod }) => {
  return (
    <>
      <div className="transactions-entry">
        <div>
          <div className="trans-seller">{seller}</div>
          <div className="trans-date">{date}</div>
        </div>
        <div className="trans-product">{product}</div>
        <div className="trans-total">${total}</div>
        {/* <div>{payMethod}</div> */}
      </div>
    </>
  )
}

export default TransactionEntry
