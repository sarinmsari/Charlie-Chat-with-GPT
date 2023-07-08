import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import ContentScript, { informOnLoad } from "./scripts/contentScript.jsx";

function init() {
  const appContainer = document.createElement("div");
  if (!appContainer) {
    throw new Error("Can't find appContainer");
  }
  console.log(document.getElementsByClassName("o3j99 qarstb")[0]);
  setTimeout(function () {
    console.log(document.getElementById("secondary-inner"));
    document.getElementById("secondary-inner").prepend(appContainer);
  }, 1000);

  const root = createRoot(appContainer);
  console.log(appContainer);
  root.render(<ContentScript />);
}
init();
