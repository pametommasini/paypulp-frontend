import "../Styles/CardImage.css"
import { userContext } from "../Context/UserContext";
import { useContext } from "react";

const CardImage = () => {
  const { userInfo } = useContext(userContext);
  console.log(userInfo);
  return (
    <div className="card-container">
      <div
        className="card"
      >
        <div className="card__top-info">
          <div>E-Wallet</div>
          <div>Bank</div>
        </div>
        <div className="card__owner-info">
          <div>{`${userInfo.firstName} ${userInfo.lastName}`}</div>
          <div>0000 0000 0000 0000</div>
        </div>
      </div>
    </div>
  );
};

export default CardImage;
