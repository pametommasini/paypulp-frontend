import Input from '../Elements/Input'

const SignUp2 = ({ register, setPage, watch, errors, isValid }) => {
  return (
    <>
      <Input
        register={register}
        errors={errors}
        type="shortText"
        name="lastName"
        label="Last name:"
      />
      <Input
        register={register}
        errors={errors}
        type="shortText"
        name="firstName"
        label="First name:"
      />
      <Input register={register} errors={errors} type="email" name="email" label="Email:" />
      <Input
        register={register}
        errors={errors}
        type="password"
        name="password"
        label="Password:"
      />
      <Input
        register={register}
        errors={errors}
        watch={watch}
        type="confirmPassword"
        name="confirmPassword"
        label="Confirm password:"
      />

      <div className="auth-btns">
        <button className="round-btns blue-btn btn-on-main" onClick={() => setPage(1)}>
          Previous
        </button>
        <button
          className="round-btns blue-outline-btn btn-on-main"
          onClick={() => setPage(3)}
          disabled={!isValid}>
          Next
        </button>
      </div>
    </>
  )
}

export default SignUp2
