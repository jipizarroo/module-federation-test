import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Mfe1Container } from "./Mfe1Container";


const App = () => {
  const [test, useTest] = React.useState(false);

  return (
    <div className="container">
      <Mfe1Container />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
