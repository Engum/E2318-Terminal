import { FrontPage } from "./pages/FrontPage/FrontPage";
import "./App.css";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import React from "react";
import io from "socket.io-client";

const socket = io("http://192.168.137.250:3001");
console.log(socket); // add this line to log the socket object

function App() {
  const [status, setStatus] = React.useState("Loading...");
  const [buttonPressed, setButtonPressed] = React.useState(false);
  const [RXdata, setRXdata] = React.useState(0);


  React.useEffect(() => {
    socket.on("SAM_data", (status) => {
      console.log(status)
      setStatus(status);
    });
  }, []);

  React.useEffect(() => {
    socket.on("button_data", (buttonPressed) => {
      //console.log(RXdata)
      setButtonPressed(buttonPressed);
    });
  }, []);
/*
  React.useEffect(() => {
    switch (RXdata) {
      case "1": //button pressed at terminal Black
        setButtonPressed(false);
        break;
      case "3": //gate closed signal
        setButtonPressed(true);
        break;
      default:
        setStatus(RXdata);
        break;
    }
  }, [RXdata]);
*/
  return (
    <>
      <FrontPage Scroll={buttonPressed}/>
      <OrderPage status={status} />
    </>
  );
  /* {buttonPressed ? <OrderPage status={status} /> : <FrontPage />} */
}

export default App;

