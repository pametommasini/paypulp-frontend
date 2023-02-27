import React from "react";

const TransactionEntry = ({ date, product, seller, amount, payMethod }) => {
  return (
    <>
      <div className="transactions-entry">
        <div >{date}</div>
        <div >{product}</div>
        <div >{seller}</div>
        <div >${amount}</div>
        <div >{payMethod}</div>
      </div>
    </>
  );
};

export default TransactionEntry;
