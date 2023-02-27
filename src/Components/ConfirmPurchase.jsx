import { Container, Paper } from "@mui/material";
import Gateway from "../Services/PaymentGateway";

const ConfirmPurchase = ({ product, userInfo, setSubmitState }) => {
  const confirmPayment = async () => {
    setSubmitState("waiting");
    try {
      const transactionTime = new Date().toLocaleString("en-US");
      const transactionInfo = {
        businessId: product.business_id,
        personalId: 1, // need it from login response
        productUuid: product.product_uuid,
        userUuid: userInfo.userUuid,
        payMethodUuid: 1234567890, // need it from login response
        totalAmount: product.price,
        dateTime: transactionTime,
        wentThrough: true,
      };
      const res = await Gateway.confirmPayment(transactionInfo)
      setSubmitState("success");
    } catch (error) {
      setSubmitState("error");
      console.log(error);
    }
  };

  return (
    <Container className="container">
      <Paper className="pay-info-container" elevation={3}>
        <div>
          <div>You are purchasing</div>
          <div>{product?.product_name}</div>
          <div>with payment method:</div>
          <div>{userInfo?.paymentMethod}</div>
          <div>Amount: {product?.price}</div>
        </div>
        <button
          className="round-btns blue-btn pay-btn"
          onClick={confirmPayment}
        >
          Confirm payment
        </button>
      </Paper>
    </Container>
  );
};

export default ConfirmPurchase;
