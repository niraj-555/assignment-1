import React, { useEffect, useState } from "react";

const TaskThree = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return interval;
  }, []);

  return <div>{time}</div>;
};

export default TaskThree;
