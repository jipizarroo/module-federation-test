import React from "react";
import ReactDOM from "react-dom";
import ErrorBoundary from "./errorHandling/ErrorBoundary";

import "./index.css";
const Mfe1App = React.lazy(() => import("mfe1/App"));
const Mfe3App = React.lazy(() => import("mfe3vite/App"));

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
          <Mfe1App />
        </RemoteWrapper>
      )}
      {/* <div>
        <RemoteWrapper>
          <iframe
            src="http://localhost:3003/"
            frameborder="0"
            title="local react app 2"
          ></iframe>
        </RemoteWrapper>
      </div> */}
      <div>
        <RemoteWrapper>
          <Mfe3App />
        </RemoteWrapper>
      </div>
    </div>
  );
};
export default Host;
