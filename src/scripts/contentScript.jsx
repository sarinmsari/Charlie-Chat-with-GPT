import React from "react";
import NavBar from "../components/navbar.jsx";
import ChatFeild from "../components/chat_feild.jsx";
import "../assets/foreground.css";

function ContentScript() {
  return (
    <div className="foreground-wrapper">
      <NavBar chat={true} />
      <ChatFeild />
    </div>
  );
}

export default ContentScript;
