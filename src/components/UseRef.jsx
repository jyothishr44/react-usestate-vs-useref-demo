import React, { useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const handleIncrement = () => {
    // setCount(count + 1);

    countRef.current++;

    // console.log("State:", count);
    console.log("Ref:", countRef.current);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>UseRef Hook Demo</h1>
      <h1>Count: {countRef.current}</h1>

      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default UseRef;
