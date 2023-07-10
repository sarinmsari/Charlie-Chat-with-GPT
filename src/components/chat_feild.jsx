import React, { useEffect, useState } from "react";
import ChatInput from "./chat_input.jsx";
import { ChatContext } from "../context/chat_context.js";

function ChatFeild({ chat = false }) {
  const [chatQuery, setChatQuery] = useState("");
  const [chatQueryResponse, setChatQueryResponse] = useState(
    "Hi! Ask Charlie anything you like"
  );
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    localStorage.setItem("chat-query", chatQuery);
    localStorage.setItem("chat-query-response", chatQueryResponse);
  }, [chatQueryResponse]);

  return (
    <ChatContext.Provider
      value={{
        setChatQuery,
        setChatQueryResponse,
        setErrorMessage,
      }}
    >
      <div className="chat-body-container">
        {chatQuery.trim() != "" && (
          <div className="chat-query-box chat-box">{chatQuery}</div>
        )}
        {chatQueryResponse.trim() != "" && (
          <div className="chat-response-box chat-box">{chatQueryResponse}</div>
        )}
      </div>
      {errorMessage.trim() != "" && (
        <div className="error-message-container">errorMessage</div>
      )}
      <ChatInput chat={chat} />
    </ChatContext.Provider>
  );
}

export default ChatFeild;
