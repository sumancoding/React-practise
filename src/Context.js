import React from "react";
import { firstName } from "./App";

function Context() {
  return (
    <div>
      <firstName.Consumer>
        {" "}
        {(value) => {
          return <h1>My name is {value}</h1>;
        }}
      </firstName.Consumer>
    </div>
  );
}

export default Context;
