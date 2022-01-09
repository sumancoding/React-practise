/*import React, { useRef, useState } from "react";

function App() {
  return (
    <div>
      <h1>Higher Order Function</h1>
      <HOCRed cmp={Counter} />
      <HOCGreen cmp={Counter} />
      <HOCBlue cmp={Counter} />
    </div>
  );
}

function HOCRed(props) {
  return (
    <h2 style={{ backgroundColor: "Pink", width: 300 }}>
      {" "}
      Counter 1
      <props.cmp />
    </h2>
  );
}
function HOCGreen(props) {
  return (
    <h2 style={{ backgroundColor: "Green", width: 300 }}>
      Counter 2
      <props.cmp />
    </h2>
  );
}
function HOCBlue(props) {
  return (
    <h2 style={{ backgroundColor: "Blue", width: 300 }}>
      Counter 3
      <props.cmp />
    </h2>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h3> Count is: {count}</h3>
      <button
        onClick={() => {
          return setCount(count + 1);
        }}
      >
        {" "}
        Update{" "}
      </button>
    </div>
  );
}

export default App;

/*React hooks provides a concept called Context.
React Context API allows you to easily access data at different levels of the component Tree , withput passing prop at every level
- createContext();
- Provider
- Consumer


import React, { useState } from "react";
import MyCounter from "./contextAPI/myCounter";
import CounterContextProvider from "./contextAPI/CounterContext";
import ComponentA from "./contextAPI/ComponentA";

function App() {
  
  return (
    <CounterContextProvider>
      <div>
        <h1>CONTEXT API</h1>
        <MyCounter />
        <ComponentA />
      </div>
    </CounterContextProvider>
  );
}

export default App;

/*import React from "react";
import "./App.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Income from "./components/Income";
import Transaction from "./components/Transaction";
import AddTransaction from "./components/AddTransaction";
import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <Income />
        <Transaction />
        <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;


import React from "react";
import { Grid } from "@mui/material/";
import Header from "./header";
import Content from "./content";

function App() {
  return (
    <Grid container direction="column">
      {" "}
      <Grid item>
        {" "}
        <Header />{" "}
      </Grid>
      <Grid item container>
        <Grid item xs={0} sm={2} />
        <Grid item xs={12} sm={8}>
          <Content />
        </Grid>
        <Grid item xs={0} sm={2} />
      </Grid>
    </Grid>
  );
}

export default App; */
