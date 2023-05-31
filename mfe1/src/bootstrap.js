import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createShadowContainer } from "../styleLoader";

// const styles = [];
// const containers = {};
// let isStandalone = false;

// let container = document.createElement("div");
// container.classList.add("mfe-shadow-container");

// const shadowRoot = container.attachShadow({ mode: "open" });

// const domElement = document.getElementById("mfe1");

// domElement.after(container);

// const root = ReactDOM.createRoot(shadowRoot);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );


// TAKE 2!
// const shadowContainer = document.getElementById('mfe1')
//   // Block all styles coming from the light DOM
//   shadowContainer.style.all = 'initial';
//   shadowContainer.attachShadow({ mode: 'open', delegatesFocus: true });
//   shadowContainer.shadowRoot.append(...styles.map(style => style.cloneNode(true)));
//   // Create a body element so that reboot CSS rules work in the shadow DOM
//   const body = document.createElement('body');
//   // Create a placeholder for the React app
//   const appPlaceholder = document.createElement('div');
//   appPlaceholder.id = 'app-placeholder';
//   body.appendChild(appPlaceholder);
//   shadowContainer.shadowRoot.appendChild(body);
//   console.log(shadowContainer)
//   console.log({containers})
//   containers[0] = shadowContainer;

 const appPlaceholder  = createShadowContainer("mfe1")


  const root = ReactDOM.createRoot(appPlaceholder)

  root.render(
    <App />
  )