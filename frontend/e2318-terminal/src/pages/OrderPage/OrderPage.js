import { Header } from "../../components/Header/Header";
import { Status } from "../../components/Status/Status";
import boat from "../../assets/boat.svg";
import "./OrderPage.css";
import axios from "axios";
import {useEffect,useState} from "react";


export const OrderPage = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
axios.get('http://localhost:3000/data').then(response => {setData(response.data)}).catch(error => {console.error(error)});
},[])
   return (
    <div className="op-wrapper flex-column" style={{ background: "#00509e" }}>
      <Header />
      <div>
        <img src={boat} alt="Boat Icon" style={{ height: "6vw" }} />
        <Status status="THE FERRY IS DOCKING:" place={data} />
        <h2>The ferry is on it's way!</h2>
      </div>
      <p className="read-more">
        Read more about milliAmpere 2 on www.ntnu.edu/autoferry
      </p>
    </div>
  );
};
