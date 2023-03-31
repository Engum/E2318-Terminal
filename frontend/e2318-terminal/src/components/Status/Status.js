import "./Status.css";

export const Status = ({ status, place }) => {
  return (
    <div className="status-wrapper">
      <h2>{status}</h2>
      <h1>{place}</h1>
    </div>
  );
};
