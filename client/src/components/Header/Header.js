import "./Header.css";
import logo from "../../assets/ntnu_logo_white.svg";


export const Header = () => {
  return (
    <div className="header-wrapper flex-row">
      <img
        src={logo}
        alt="NTNU Logo"
        style={{ heigth: "auto", width: "35vh", marginTop: "-1%" }}
      />
    </div>
  );
};
