import "../Styles/Personal.css";
import photo from "../Assets/2._Shop.jpg";

export default function Personal() {
  return (
    <div className="div">
      <h1 className="title">Shop and buy online</h1>
      <div className="div2">
        <p className="text1">
          If you choose PayPulp at checkout, you could skip entering your card
          info each time you make a purchase.
          <br />
          PayPulp helps you shop with confidence. PayPulp can help you to
          simplify your life.
          <br />
          Millions of people trust PayPulp to buy, sell, receive and send money
          securely. We are here to help make it as easy as possible.
        </p>
        <img className="photo" width="600" height="400" src={photo} />
      </div>
    </div>
  );
}
