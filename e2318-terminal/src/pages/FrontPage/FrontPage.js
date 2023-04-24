import { ButtonInformation } from "../../components/ButtonInformation/ButtonInformation";
import { Header } from "../../components/Header/Header";
import { Instruction } from "../../components/Instruction/Instruction";
import "./FrontPage.css";

export const FrontPage = ( {} ) => {
  const scrolldown = () => {
      window.scrollTo({
        top: window.innerHeight,
        behavior: "smooth",
      });
  }
  return (
    <div className="fp-wrapper flex-column">
      <Header />
      <div>
        <Instruction />
        <button onClick={scrolldown}></button>
      </div>

      <ButtonInformation />
    </div>
  );
};
