import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { Mfe1Container } from "mfe1/Mfe1Shell"


const Host = () => (
  <div className="container">
    Hola
    <Mfe1Container />
  </div>
);
ReactDOM.render(<Host />, document.getElementById("app"));
