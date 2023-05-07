import { ButtonInformation } from "../../components/ButtonInformation/ButtonInformation";
import { Header } from "../../components/Header/Header";
import { Instruction } from "../../components/Instruction/Instruction";
import "./FrontPage.css";

export const FrontPage = () => {
  return (
    <div className="fp-wrapper flex-column">
      <Header />
      <div>
        <Instruction />
      </div>

      <ButtonInformation />
    </div>
  );
};
