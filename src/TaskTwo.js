import React, { useEffect, useState } from "react";

const TaskTwo = () => {
  const [message, setMessage] = useState("Hello! working with react component");

  useEffect(() => {
    setTimeout(() => {
      setMessage("Working with react component");
    }, 2000);
  }, []);
  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default TaskTwo;
