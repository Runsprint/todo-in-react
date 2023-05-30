import { useState } from "react";

const Clock = () => {
  const time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    const time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };

  setInterval(updateTime, 1000);
  return (
    <div className="clockDiv">
      <h1 className="name">{currentTime}</h1>
    </div>
  );
};

export default Clock;
