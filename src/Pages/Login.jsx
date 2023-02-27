import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import LoginCard from "../Components/LoginCard";
import useLogin from "../Hooks/useLogin";
import "../Styles/Auth.css";

const Login = ({ setIsAuth }) => {
  const params = useLoaderData(); // get query params (if logging on gateway or main app)
  const { loginError, onSubmit } = useLogin(params.isOnGateway, setIsAuth)
  const { register, handleSubmit } = useForm({
    mode: "onTouched",
    defaultValues: {
      email: "masairl@mail.com",
      password: "1234",
    },
  });

  return (
    <div className="auth">
      <div className="auth-paper">
        <h2 className="auth-title">Log In</h2>
        <LoginCard
          register={register}
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          loginError={loginError}
        />
      </div>
    </div>
  );
};

export default Login;
