import 'Styles/Submitting.css'

const Submitting = ({ submitState, location, goBack, errorMessage }) => {
  return (
    <div className="submitting">
      {submitState === 'waiting' ? (
        <>
          <div>Your request is being processed</div>
          <div className="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </>
      ) : submitState === 'error' ? (
        <>
          <div>We&apos;re sorry</div>
          {location === 'signup' ? (
            errorMessage && <div>{errorMessage}</div>
          ) : (
            <div>There has been a problem with your submission</div>
          )}
          {location === 'gateway' && <div>There has been a problem with your payment</div>}
          <div>:&#40;</div>
          <button className="round-btns blue-btn" onClick={goBack}>
            Go back
          </button>
        </>
      ) : submitState === 'success' ? (
        <>
          <div>Congratulations!</div>
          {location === 'signup' && (
            <>
              <div>Your account has been successfully created</div>
              <div>Please stand by while you&apos;re being redirected</div>
            </>
          )}
          {location === 'gateway' && <div>Your payment has gone through.</div>}
          <div>:&#41;</div>
        </>
      ) : null}
    </div>
  )
}

export default Submitting
