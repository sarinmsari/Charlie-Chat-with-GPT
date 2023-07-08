import React from "react";
import { render } from "react-dom";
import "./assets/tailwind.css";
import NavBar from "./components/navbar.jsx";
import ChatFeild from "./components/chat_feild.jsx";

function Popup() {
  return (
    <div className="popup-container">
      <NavBar />
      <ChatFeild />
    </div>
  );
}
export default Popup;


render(<Popup />, document.getElementById("react-target"));
