import "../../Styles/Signup.css"

const SignUp1 = ({ setPage, setAccountType }) => {
  const startSignup = (accType) => {
    setAccountType(accType);
    setPage(2);
  };

  return (
    <>
      <section className="signup-1">
        <div className="signup-text">It is free to sign up to PayPulp!</div>
        <div className="signup-text">Choose an account that suits your needs:</div>
        <div className="signup-text">-Personal Account: <br/> Shop safely in millions of online shops.</div>
        <div className="signup-text">
          -Business Account:<br/> Get paid online or offline. Set-up is easy. Your
          buyers don&apos;t need a PayPal account to pay you.
        </div>
        <div className="auth-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => startSignup("personal")}
          >
            Lets Get Personal!💋
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            onClick={() => startSignup("business")}
          >
            Lets Do Business😎
          </button>
        </div>
      </section>
    </>
  );
};

export default SignUp1;
