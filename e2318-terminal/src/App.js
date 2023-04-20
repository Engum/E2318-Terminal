import { FrontPage } from "./pages/FrontPage/FrontPage";
import "./App.css";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import React from "react";

function App() {
  const [data, setData] = React.useState("");
  const [status, setStatus] = React.useState("Loading...");
  const [buttonPressed, setButtonPressed] = React.useState(false);

  const fetchData = async () => {
    const response = await fetch("/api");
    const data = await response.json();
    setData(data.RXdata);
    console.log(data.RXdata);
  };

  React.useEffect(() => {
    const intervalID = setInterval(fetchData, 1000);
    return () => clearInterval(intervalID);
  }, []);

  React.useEffect(() => {
    switch (data) {
      case "1": //button pressed at terminal Black
        setButtonPressed(false);
        break;
      case "3": //gate closed signal
        setButtonPressed(true);
        break;
      default:
        setStatus(data);
        break;
    }
  }, [data]);

  return (
    <>
      <FrontPage />
      <OrderPage />
    </>
  );
  /* {buttonPressed ? <OrderPage status={status} /> : <FrontPage />} */
}

export default App;
