import React from "react";
import { Header } from "../components/Header";
import { runStandalone } from "../styleLoader";

import "./index.css";

export const App = ({ isStandalone = false }) => {
  React.useEffect(() => {
    if (!isStandalone) {
      return;
    }
    // If we receive the isStandAlone prop we will initialize the style loader in standalone mode
    runStandalone();
  }, [isStandalone]);

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
