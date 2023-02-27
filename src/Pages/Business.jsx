import photo from "../Assets/3._Payments_3.jpg";
import "../Styles/Business.css";

export default function Business() {
  return (
    <div className="div">
      <h1 className="title">Accept payments</h1>
      <div className="div2">
        <p className="text1">
          Offer your customers an easy and fast payment experience through
          Paypul commerce platform, where they can pay in the way they want to,
          without ever leaving your website.
          <br />
          PayPulp can help your company to simplify his working. Millions of
          companies trust PayPulp to accept and make payments securely. We are
          here to help make it as easy as possible.
        </p>
        <img className="photo" width="600" height="400" src={photo} />
      </div>
    </div>
  );
}
