import "./Status.css";
import React from "react";

export const Status = ({ message }) => {
  
  const dict = {
  "4" : "Docking at Ravnkloa", 		//Docking complete RK
  "5" : "Docking at Vestre Kanalkai",	//Docking complete VK
  "6" : "Boarding at Ravnkloa", 	//Open gate RK
  "7" : "Boarding at Vestre Kanalkai",	//Open gate VK
  "8" : "Traveling to Ravnkloa",	//Boarding complete at VK
  "9" : "Traveling to Vestre kanalkai",	//Boarding complete at BK
  "0" : "Docking at PetterPetterASHQ"	//Placeholder
}

  return (
    <div className="status-wrapper">
      <h1>{dict[message]}</h1>
    </div>
  );
};