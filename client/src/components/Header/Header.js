import "./Header.css";
import logo from "../../assets/ntnu_logo_white.svg";
import timeIcon from "../../assets/clock.svg";
import { Clock } from "../Clock/Clock";


export const Header = () => {
  return (
    <div className="header-wrapper flex-row">
      <img
        src={logo}
        alt="NTNU Logo"
        style={{ heigth: "auto", width: "35vh", marginTop: "-1%" }}
      />
      <div className="time flex-row">
        <img
          src={timeIcon}
          alt="Clock icon"
          style={{
            height: "3vh",
            width: "3vh",
            marginTop: "1%",
            marginRight: "10%",
          }}
        />
        <Clock />
      </div>
    </div>
  );
};
