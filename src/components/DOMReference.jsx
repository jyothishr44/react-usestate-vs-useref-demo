import React, { useRef, useState, useEffect } from "react";

const DOMReference = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Refering DOM Elements</h1>
      <input ref={inputRef} type="text" placeholder="Type something..." />
    </div>
  );
};

export default DOMReference;
