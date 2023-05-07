import { FrontPage } from "./pages/FrontPage/FrontPage";
import "./App.css";
import { OrderPage } from "./pages/OrderPage/OrderPage";
import { useEffect, useState }from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");
console.log(socket); // add this line to log the socket object

function App() {
  const [status, setStatus] = useState("Loading...");

  const scrolldown = (isPressed) => {
    window.scrollTo({
      top: isPressed ? window.innerHeight : -window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    socket.on("SAM_data", (status) => {
      setStatus(status);
    });
  }, []);

  useEffect(() => {
    socket.on("button_data", (buttonPressed) => {
      scrolldown(buttonPressed);
    });
  }, []);
  
  return (
    <>
      <FrontPage />
      <OrderPage status={status} />
    </>
  );

}

export default App;
