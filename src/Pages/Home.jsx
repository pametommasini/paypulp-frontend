import "../Styles/HomeAndInfo.css";
import Photo from "../Assets/1._HOME.png";

export default function Home() {
  return (
    <div className="home">
      <h1 className="home-title">
        <div>Pay fast,</div>
        <div>Pay secure.</div>
      </h1>
      <p className="home-text">
        PayPulp is a secure and efficient online payment website that is
        dedicated to providing its customers with a positive experience. 
        {/* The
        website utilizes measures to ensure that all transactions are safe and
        protected from fraud. */}
        {/* Additionally, the platform offers a variety of
          payment options, making it easy for customers to choose the method
          that works best for them. PayPulp is also committed to providing
          excellent customer service, with a dedicated support team available to
          assist with any questions or concerns. Overall, PayPulp is a reliable
          and trustworthy choice for anyone looking to make online payments. */}
      </p>
      <img
        className="home-image"
        src={Photo}
        alt={"woman happy to pay with PayPulp"}
      />
    </div>
  );
}
