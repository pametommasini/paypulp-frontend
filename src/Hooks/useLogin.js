import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "../Context/UserContext";
import Auth from "../Services/Auth";

/**
 * 
 * @param {boolean} isOnGateway if redirected from external e-commerce = true
 * @param {boolean} setIsAuth state setter on payment gateway
 * @returns {boolean, function}
 */
export default function useLogin(isOnGateway, setIsAuth) {
  const { setUserInfo } = useContext(userContext);
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  // if user is already logged don't allow access to login page
  useEffect(() => {
    if (localStorage.getItem("token") && !isOnGateway) navigate(-1);
  }, [])

  const onSubmit = async (userData) => {
      // auth req
      try {
        const res = await Auth.login(userData);
        if (res.status === 200) {
          setUserInfo(res.data.userInfo);
          localStorage.setItem("token", res.data.token);
          if (isOnGateway) {
            setIsAuth(true);
          } else {
            navigate("/dashboard");
          }
          return res.status
        }
      } catch (error) {
        console.log(error);
        setLoginError(true);
      }
    };

    return { loginError, onSubmit };
}