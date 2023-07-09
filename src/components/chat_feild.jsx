import React, { useEffect, useState } from "react";
import ChatInput from "./chat_input.jsx";

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
    <>
      <div className="chat-body-container">
        {chatQuery.trim() != "" && (
          <div className="chat-query-box chat-box">{chatQuery}</div>
        )}
        {chatQueryResponse.trim() != "" && (
          <div className="chat-response-box chat-box">{chatQueryResponse}</div>
        )}
      </div>
      {errorMessage.trim() != "" && (
        <div className="error-message-container">{errorMessage}</div>
      )}
      <ChatInput
        setQuery={setChatQuery}
        setResponse={setChatQueryResponse}
        setError={setErrorMessage}
        chat={chat}
      />
    </>
  );
}

export default ChatFeild;
