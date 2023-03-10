import { useForm } from 'react-hook-form'
import SignUp1 from 'Components/Signup/SignUp1'
import SignUp2 from 'Components/Signup/SignUp2'
import SignUp3 from 'Components/Signup/SignUp3'
import SignUp4 from 'Components/Signup/SignUp4'
import Submitting from 'Components/Submitting'
import 'Styles/Auth.css'
import useSignup from 'Hooks/useSignup'

const signupDefaultValues = {
  firstName: 'Robert',
  lastName: 'Robertz',
  email: 'robert@robertz.com',
  password: '1234Qwer',
  confirmPassword: '1234Qwer',
  phone: '1234567890',
  address: 'Robert Street 4',
  city: 'Madrid',
  country: 'Madrid',
  securityQuestion: 'Who is Robert?',
  securityQuestionAnswer: 'Who wants to',
}

export default function Signup() {
  const { page, setPage, accountType, setAccountType, submitting, setSubmitting, onSubmit } =
    useSignup()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    defaultValues: signupDefaultValues,
  })

  // go back to page 1 but keep info
  const goBack = () => {
    setPage(1)
    setAccountType(null)
    setSubmitting(null)
  }

  return (
    <div className="auth">
      <div className="auth-paper">
        <h2 className="auth-title">Sign up</h2>
        {submitting ? (
          <Submitting submitState={submitting} goBack={goBack} location="signup" />
        ) : (
          <form className="auth-card" onSubmit={handleSubmit(onSubmit)}>
            {page === 1 && <SignUp1 setPage={setPage} setAccountType={setAccountType} />}
            {page === 2 && (
              <SignUp2
                setPage={setPage}
                register={register}
                watch={watch}
                errors={errors}
                isValid={isValid}
              />
            )}
            {page === 3 && (
              <SignUp3 setPage={setPage} register={register} errors={errors} isValid={isValid} />
            )}
            {page === 4 && (
              <SignUp4
                setPage={setPage}
                register={register}
                errors={errors}
                isValid={isValid}
                handleSubmit={onSubmit}
              />
            )}
          </form>
        )}
      </div>
    </div>
  )
}
