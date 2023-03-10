import Input from '../Elements/Input'

const SignUp4 = ({ register, setPage, errors, isValid }) => {
  return (
    <>
      <Input
        register={register}
        errors={errors}
        type="shortText"
        name="businessName"
        label="Business name:"
      />
      <Input
        register={register}
        errors={errors}
        type="shortText"
        name="businessType"
        label="Business type:"
      />
      <Input
        register={register}
        errors={errors}
        type="longText"
        name="businessDescription"
        label="Business description:"
      />
      <Input register={register} errors={errors} type="url" name="webPageURL" label="Web page:" />
      <Input register={register} errors={errors} type="shortText" name="cif" label="Cif number:" />
      <Input
        register={register}
        errors={errors}
        type="shortText"
        name="industry"
        label="Industry:"
      />
      <Input
        register={register}
        errors={errors}
        type="shortText"
        name="bankAccountNumber"
        label="Bank account number:"
      />

      <div className="auth-btns">
        <button className="round-btns blue-btn btn-on-main" onClick={() => setPage(3)}>
          Previous
        </button>
        <button
          className="round-btns blue-outline-btn btn-on-main"
          type="submit"
          disabled={!isValid}>
          Send
        </button>
      </div>
    </>
  )
}

export default SignUp4
