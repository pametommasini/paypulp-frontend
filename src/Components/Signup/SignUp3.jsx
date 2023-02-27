import Input from "../Elements/Input";

const SignUp3 = ({ register, setPage, errors, isValid }) => {
  // get current date and format correctly for display as default value
  const getCurrentDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();
    const formatDate = `${year}-${month > 9 ? month : "0" + month}-${
      day > 9 ? day : "0" + day
    }`;
    return formatDate;
  };
  return (
    <>
      <section className="auth-card">
        <Input
          register={register}
          errors={errors}
          type="date"
          name="birthDate"
          label="Date of birth:"
        />
        <Input
          register={register}
          errors={errors}
          type="phone"
          name="phone"
          label="Phone number:"
        />
        <Input
          register={register}
          errors={errors}
          type="longText"
          name="address"
          label="Address:"
        />
        <Input
          register={register}
          errors={errors}
          type="shortText"
          name="city"
          label="City:"
        />
        <Input
          register={register}
          errors={errors}
          type="shortText"
          name="country"
          label="Country:"
        />

        <div className="auth-btns">
          <button
            className="round-btns blue-btn btn-on-main"
            onClick={() => setPage(2)}
          >
            Previous
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            onClick={() => setPage(4)}
            disabled={isValid ? false : true}
          >
            Next
          </button>
        </div>
      </section>
    </>
  );
};

export default SignUp3;
