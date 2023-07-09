import React, { useContext, useState } from "react";
import { ChatContext } from "../context/chat_context.js";

function NavBar({ chat }) {
  //const [isChatActive, setIsChatActive] = useState(false);

  const { setIsChatActive } = useContext(ChatContext);
  const { isChatActive } = useContext(ChatContext);

  const handleToggle = () => {
    setIsChatActive(!isChatActive);
  };

  return (
    <div className="navbar-container">
      {!chat && <img src="icon.png" alt="Charlie" className="navbar-icon" />}
      {chat && (
        <div className="toggle-container" onClick={handleToggle}>
          <div className="chat-toggle-section">Chat with ChatGPT</div>
          <div className="toggle-icon">{isChatActive ? "▲" : "▼"}</div>
        </div>
      )}
    </div>
  );
}

export default NavBar;
