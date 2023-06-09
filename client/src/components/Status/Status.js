import "./Status.css";
import React from "react";
import boat from "../../assets/boat.svg";

export const Status = ({ message }) => {
  const dict = {
    "72": "Boarding at Ravnkloa", //TEAID_GCMD_OPEN_RK
    "b2": "Boarding at Vestre Kanalkai", //TEBID_GCMD_OPEN VK
    "bc": "Traveling to Ravnkloa", //BCOMP at VK
    "7c": "Traveling to Vestre kanalkai", //BCOMP at RK
    "0" : "Loading..."
  };
  return (
    <div className="status-wrapper">
      <h1>Ravnkloa</h1>
      <img
        src={boat}
        alt="Boat Icon"
        style={{ height: "10vw", marginBottom: "0%" }}
      />
      <h2>{dict[message]}</h2>
    </div>
  );
  //<h1>{dict[message]}</h1>
};
