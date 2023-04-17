import "./Instruction.css";

export const Instruction = ({ text }) => {
  return (
    <div className="instruction-wrapper">
      <h2>{text}</h2>
    </div>
  );
};
