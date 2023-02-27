import axios from "axios";

class Transactions {
  static getConfig = (token) => {return {headers: {Authorization: token }}}

  static getTransactions = async (userUuid, amount) => {
    const token = localStorage.getItem("token");
    const config = Transactions.getConfig(token);

    const res = await axios.get(
      `${process.env.REACT_APP_BASE_URL}/private/transaction/${userUuid}`,
      config,
    );
    return res;
  };
}

export default Transactions;
