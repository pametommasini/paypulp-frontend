import Input from '../Elements/Input'

const SignUp4 = ({ register, setPage, errors, isValid, accountType }) => {
  return (
    <>
      <Input
        register={register}
        errors={errors}
        type="longText"
        name="securityQuestion"
        label="Security question:"
      />
      <Input
        register={register}
        errors={errors}
        type="longText"
        name="securityQuestionAnswer"
        label="Security answer:"
      />

      <div className="auth-btns">
        <button className="round-btns blue-btn btn-on-main" onClick={() => setPage(3)}>
          Previous
        </button>
        {accountType === 'personal' && (
          <button
            className="round-btns blue-outline-btn btn-on-main"
            type="submit"
            disabled={!isValid}>
            Send
          </button>
        )}
        {accountType === 'business' && (
          <button
            className="round-btns blue-outline-btn btn-on-main"
            onClick={() => setPage(5)}
            disabled={!isValid}>
            Next
          </button>
        )}
      </div>
    </>
  )
}

export default SignUp4
