import React from "react";
import "./index.css";

import { Header } from "../components/Header";

export const App = () => {
  return (
    <>
      <div className="container">
        <div>Estoy dentro del contener MFE1</div>
        <Header />
      </div>
    </>
  );
};

export default App;
