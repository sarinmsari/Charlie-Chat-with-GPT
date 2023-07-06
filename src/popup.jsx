import React from "react";
import { render } from "react-dom";
import "./assets/tailwind.css";

function Popup() {
  return (
    <div className="popup-outbox">
      <h1 className="text-5xl text-green-500">Hello World!</h1>
      <p>This is a sample popup.</p>
    </div>
  );
}
render(<Popup />, document.getElementById("react-target"));
