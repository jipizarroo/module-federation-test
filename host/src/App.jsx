import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./errorHandling/ErrorBoundary";

import "./index.css";
import { inject, cleanup } from "mfe1/appInjector";


const parentElementId = "mfe1"

const RemoteWrapper = ({ children }) => (
  <div
    style={{
      border: "1px solid red",
      background: "white",
    }}
  >
    <ErrorBoundary>{children}</ErrorBoundary>
  </div>
);

export const Host = () => {
  const [mfe1, setMfe1] = React.useState(false);

  React.useEffect(() => {
    console.log(parentElementId)
    inject(parentElementId);
    return () => cleanup(parentElementId);
  }, []);


  return (
    <div className="container">
      Hola Soy el Host
      <div>
        <p>Vamos a ver si cargamos el mfe</p>
        <button
          onClick={() =>
            React.startTransition(() => {
              setMfe1(!mfe1);
            })
          }
        >
          Turn {mfe1 ? "off" : "on"}{" "}
        </button>
      </div>
      {mfe1 && (
        <RemoteWrapper>
          {/* <div id={parentElementId}></div> */}
        </RemoteWrapper>
      )}
      <div id={parentElementId}></div>
    </div>
  );
};
export default Host;
