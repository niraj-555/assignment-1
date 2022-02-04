import React, { useState } from "react";

const TaskFour = () => {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increaseCount}>Increase Counter</button>
    </div>
  );
};

export default TaskFour;
