import React from "react";
import UseRef from "./components/UseRef";
import StateVsRef from "./components/StateVsRef";
import DOMReference from "./components/DOMReference";

const App = () => {
  return (
    <>
      <UseRef />
      <hr />
      <StateVsRef />
      <hr />
      <DOMReference />
    </>
  );
};

export default App;
