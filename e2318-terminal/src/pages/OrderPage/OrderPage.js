import { Header } from "../../components/Header/Header";
import { Status } from "../../components/Status/Status";
import "./OrderPage.css";
import ping from "../../assets/boat.svg";

export const OrderPage = ({ status }) => {
  const scrollup = () => {
    window.scrollTo({
      top: -window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="op-wrapper flex-column">
      <Header />
      <div className="op-status">
        <Status message={status} />
      </div>
      <div className="op-feedback">
        <img alt="feedback-animation" src={ping} style={{ width: "7vw" }} />
        <h1>THE FERRY IS ON IT'S WAY!</h1>
        <button onClick={scrollup}></button>
      </div>
      <p
        className="read-more"
        style={{ textAlign: "center", marginBottom: "3%" }}
      >
        Read more about milliAmpere 2 on www.ntnu.edu/autoferry
      </p>
    </div>
  );
};
