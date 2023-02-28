import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import SignUp1 from '../../Components/Signup/SignUp1'
import SignUp2 from '../../Components/Signup/SignUp2'
import SignUp3 from '../../Components/Signup/SignUp3'
import SignUp4 from '../../Components/Signup/SignUp4'
import Submitting from '../../Components/Submitting'
import { userContext } from '../../Context/UserContext'
import Auth from '../../Services/Auth'
import '../../Styles/Auth.css'

export default function Signup() {
  const [page, setPage] = useState(1)
  const [accountType, setAccountType] = useState(null)
  const [submitting, setSubmitting] = useState(null)
  const { setUserInfo } = useContext(userContext)
  const navigate = useNavigate()
  /**
   * react-hook-form
   * -register handles input actions (onChange, validation, ...)
   * -handleSubmit
   * -formState keeps track of validation errors
   * -mode: onTouch verifies input: first after onBlur, then onChange
   * -default values sets defaults for every field
   */
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onTouched',
    defaultValues: {
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
    },
  })

  const getTimezone = () => {
    return (new Date().getTimezoneOffset() / 60) * -1
  }

  // set submitting dialog and make post request
  const onSubmit = async (userData) => {
    if (userData) {
      delete userData.confirmPassword
      userData = {
        ...userData,
        accountType,
        timeZone: getTimezone(),
      }
    }
    setSubmitting('waiting')
    try {
      const res = await Auth.signup(userData)
      if (res.statusText === 'OK') {
        const redirect = () => navigate('/dashboard')
        const success = () => {
          setSubmitting('success')
          const newUserInfo = {
            ...res.data.userInfo,
            ...res.data.customerInfo,
          }
          localStorage.setItem('token', res.data.token)
          setUserInfo(newUserInfo)
          setTimeout(redirect, 3000)
        }
        success()
      }
      // just faking api call
      // setTimeout(success, 3000);
    } catch (error) {
      setSubmitting('error')
      console.log(error)
    }
  }

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
