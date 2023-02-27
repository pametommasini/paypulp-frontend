import "../Styles/Submitting.css";

const Submitting = ({ submitState, location, goBack }) => {
  return (
    <div className="submitting">
      {submitState === "waiting" ? (
        <>
          <div>Your request is being processed</div>
          <div className="lds-ripple"><div></div><div></div></div>
        </>
      ) : submitState === "error" ? (
        <>
          <div>We're sorry</div>
          {location === "signup" && (
            <div>There has been a problem with your submission</div>
          )}
          {location === "gateway" && (
            <div>There has been a problem with your payment</div>
          )}
          <div>:&#40;</div>
          <button onClick={goBack}>Go back</button>
        </>
      ) : submitState === "success" ? (
        <>
          <div>Congratulations!</div>
          {location === "signup" && (
            <>
            <div>Your account has been successfully created</div>
            <div>Please stand by while you're being redirected</div>
            </>
          )}
          {location === "gateway" && <div>Your payment has gone through.</div>}
          <div>:&#41;</div>
        </>
      ) : null}
    </div>
  );
};

export default Submitting;
