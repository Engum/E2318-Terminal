import "./Clock.css";
import { useState, useEffect } from "react";

export const Clock = () => {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }
  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <p className="clock">
      {date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
    </p>
  );
};
