import React from "react";
import { createRoot } from "react-dom/client";
import ContentScript from "./scripts/contentScript.jsx";

function init() {
  const secondaryInner = document.getElementById("secondary-inner")
  const appContainer = document.createElement("div");
  if (!appContainer) {
    throw new Error("Can't find appContainer");
  }
  secondaryInner.appendChild(appContainer);
  const root = createRoot(appContainer);
  console.log(appContainer);
  root.render(<ContentScript />);
}
init();
