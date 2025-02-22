import ReactDOM from "react-dom";
import React from "react";

import { App } from "./App";

// The element id is defined in app-block.liquid
const container = document.getElementById("tokengating-example-app");
console.log("index.jsx container", container);
if (container.dataset.product_gated === "true") {
  ReactDOM.createRoot(container).render(<App />);
} else {
  container.innerHTML = "This product is not gated.";
}
