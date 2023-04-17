import "./Status.css";
import React from "react";

export const Status = ({ status, place }) => {
  const [data,setData] = React.useState("");

  const fetchData = async() => {
	  const response = await fetch('/api')
	  const data = await response.json()
	  setData(data.RXdata)
	  console.log(data.RXdata)};
  React.useEffect(() => {
    const intervalID = setInterval(fetchData, 1000)
    return () => clearInterval(intervalID);
  }, []);
  
  const dict = {
  "4" : "Docking at Ravnkloa",
  "5" : "Docking at Thomas",
  "6" : "Docking at IDAR",
  "7" : "Docking at MAGNUS",
  "8" : "Docking at PETTER"
}

  return (
    <div className="status-wrapper">
      <h1>{dict[data]}</h1>
    </div>
  );
};



