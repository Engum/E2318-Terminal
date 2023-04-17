import { FrontPage } from "./pages/FrontPage/FrontPage";
import "./App.css";
import { OrderPage } from "./pages/OrderPage/OrderPage";
//trying to import data
//import axios from "axios";
import React from "react";
//import {useEffect,useState} from "react";

//import { Status } from "../../components/Status/Status";

function App() {
  const [data,setData] = React.useState("");

  const fetchData = async() => {
	  const response = await fetch('/api')
	  const data = await response.json()
	  setData(data.RXdata)
	  console.log(data.RXdata)};
  React.useEffect(() => {
    document.documentElement.requestFullscreen();
    const intervalID = setInterval(fetchData, 1000)
    return () => clearInterval(intervalID);
  }, []);
  
  let page;
  if (data === "2") {
    page = <FrontPage />;
  } else {
    page = <OrderPage />;
  }

  return (
    <>
      {page}
    </>
  );
}

export default App;
