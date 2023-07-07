import React, { useState } from "react";
import ChatInput from "./chat_input.jsx";

function ChatFeild() {
  const [chatQuery, setChatQuery] = useState(
    "Hi! Ask Charlie anything you like"
  );
  const [chatQueryResponse, setChatQueryResponse] = useState("");
  const updateChatBox = () => {
    if (localStorage.getItem("chat-query") != "") {
      setChatQuery(localStorage.getItem("chat-query"));
    }
    if (localStorage.getItem("chat-query") != "") {
      setChatQueryResponse(localStorage.getItem("chat-query-response"));
    }
  };

  return (
    <>
      <div className="chat-body-container">
        <div className="chat-query-box chat-box">{chatQuery}</div>
        {chatQueryResponse != "" && (
          <div className="chat-response-box chat-box">{chatQueryResponse}</div>
        )}
      </div>
      <ChatInput updateChatBox={updateChatBox} />
    </>
  );
}

export default ChatFeild;
