import Input from '../Elements/Input'

const SignUp3 = ({ register, setPage, errors, isValid }) => {
  console.log(isValid)
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
        <Input register={register} errors={errors} type="shortText" name="city" label="City:" />
        <Input
          register={register}
          errors={errors}
          type="shortText"
          name="country"
          label="Country:"
        />

        <div className="auth-btns">
          <button className="round-btns blue-btn btn-on-main" onClick={() => setPage(2)}>
            Previous
          </button>
          <button
            className="round-btns white-btn btn-on-main"
            onClick={() => setPage(4)}
            disabled={!isValid}>
            Next
          </button>
        </div>
      </section>
    </>
  )
}

export default SignUp3
