/*React hooks provides a concept called Context.
React Context API allows you to easily access data at different levels of the component Tree , withput passing prop at every level
- createContext();
- Provider
- Consumer
*/

import React from "react";
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
