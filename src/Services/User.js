import axios from "axios";

class UserInfo {
  static getConfig = (token) => {
    return { headers: { Authorization: token } };
  };

  static getUserInfo = async (userData) => {
    const token = localStorage.getItem("token");
    const config = UserInfo.getConfig(token);
    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/private/user/userdata`,
      config
    );
    return res;
  };

  static updateCostumerInfo = async () => {
    const token = localStorage.getItem("token");
    const config = UserInfo.getConfig(token);
    const res = await axios.patch(
      `${process.env.REACT_APP_BASE_URL}/private/user/userdata`,
      config
    );
    return res;
  }
}

export default UserInfo;
