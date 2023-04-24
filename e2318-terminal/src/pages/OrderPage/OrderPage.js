import { Header } from "../../components/Header/Header";
import { Status } from "../../components/Status/Status";
import "./OrderPage.css";
import ping from "../../assets/boat.svg";

export const OrderPage = ({ status }) => {
  return (
    <div className="op-wrapper flex-column">
      <Header />
      <div className="op-status">
        <Status message={status} />
      </div>
      <div className="op-feedback">
        <div className="ping-container">
          <div
            className="ping"
            style={{
              textAlign: "center",
              fontSize: "3vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            ✓
          </div>
        </div>
        <h1>THE FERRY IS ON IT'S WAY!</h1>
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
