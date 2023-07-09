import React, { useState } from "react";
import NavBar from "../components/navbar.jsx";
import ChatFeild from "../components/chat_feild.jsx";
import "../assets/foreground.css";
import { ChatContext } from "../context/chat_context.js";

function ContentScript() {
  const [isChatActive, setIsChatActive] = useState(false);

  return (
    <ChatContext.Provider value={{ isChatActive, setIsChatActive }}>
      <div className="foreground-wrapper">
        <NavBar chat={true} />
        {isChatActive && <ChatFeild chat={true}/>}
      </div>
    </ChatContext.Provider>
  );
}

export default ContentScript;
