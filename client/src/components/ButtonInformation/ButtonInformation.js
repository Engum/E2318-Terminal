import "./ButtonInformation.css";
import arrow from "../../assets/arrow.svg";

export const ButtonInformation = () => {
  return (
    <div className="flex-column bi-wrapper">
      <h1>PRESS THE BUTTON BELOW</h1>
      <h2>TO ORDER THE FERRY</h2>
      <img src={arrow} alt="arrow icon" />
    </div>
  );
};
