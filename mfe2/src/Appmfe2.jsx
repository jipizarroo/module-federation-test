import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Soy una app displayed an un iframe</div>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
