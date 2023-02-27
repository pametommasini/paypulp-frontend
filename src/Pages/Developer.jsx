// import photo from "../Assets/4._Developer.jpg";
import "../Styles/Developer.css";

export default function Developer() {
  return (
    <div className="div">
      <h1 className="title">PayPulp for Developers</h1>
      <div className="div2">
        <p className="text1">
          Build a payment solution that's right for you with PayPulp for
          Developers
          <br />
          Whether you&apos;re building an online, mobile or in-person payment
          solution, create a PayPulp Developer account and find the resources
          you need to test & go live.
        </p>
        <img
          className="photo"
          width="600"
          height="400"
          src={require("../Assets/4._Developer.jpg")}
          alt="Web developers at work"
        />
      </div>
    </div>
  );
}
