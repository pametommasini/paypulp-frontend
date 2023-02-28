import AuthError from './AuthError'

const LoginCard = ({ register, handleSubmit, onSubmit, loginError }) => {
  return (
    <form className="auth-card" onSubmit={handleSubmit(onSubmit)}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input className="text-input" type="text" {...register('email')} />
        <p className="spacer"></p>
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input className="text-input" type="password" {...register('password')} />
      </div>
      <div className="auth-btns">
        <button className="round-btns blue-btn btn-on-main" onClick={handleSubmit}>
          Login
        </button>
      </div>
      {loginError && <AuthError />}
    </form>
  )
}

export default LoginCard
