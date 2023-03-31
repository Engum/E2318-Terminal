import "./Header.css";
import logo from "../../assets/ntnu_logo_white.svg";
import timeIcon from "../../assets/clock.svg";
import { Clock } from "../Clock/Clock";
import { useState, useEffect } from "react";

export const Header = () => {
  return (
    <div className="header-wrapper flex-row">
      <img
        src={logo}
        alt="NTNU Logo"
        style={{ heigth: "45vh", width: "45vh" }}
      />
      <div className="time flex-row">
        <img
          src={timeIcon}
          alt="Clock icon"
          style={{ height: "4vh", width: "4vh", marginTop: "1%" }}
        />
        <Clock />
      </div>
    </div>
  );
};
