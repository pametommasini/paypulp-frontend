import Input from "../Elements/Input";

const SignUp4 = ({ register, setPage, errors, isValid }) => {
  return (
    <>
    <Input register={register} errors={errors} type="longText" name="securityQuestion" label="Security question:" />
    <Input register={register} errors={errors} type="longText" name="securityQuestionAnswer" label="Security answer:" />
      
        <div className="auth-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => setPage(3)}
          >
            Previous
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            type="submit"
            disabled={isValid ? false : true}
          >
            Send
          </button>
        </div>

    </>
  );
};

export default SignUp4;
