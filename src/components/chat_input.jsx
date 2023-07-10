import React, { useContext, useState } from "react";
import { ChatContext } from "../context/chat_context.js";

function ChatInput({ chat }) {
  const [inputText, setInputText] = useState("");

  const { setChatQuery } = useContext(ChatContext);
  const { setChatQueryResponse } = useContext(ChatContext);
  const { setErrorMessage } = useContext(ChatContext);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setChatQueryResponse("");
    setChatQuery(inputText);

    //POST request
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({ message: inputText }),
    })
      .then((response) => response.json())
      .then((data) => {
        setChatQueryResponse(data.message);
      })
      .catch((err) => {
        setErrorMessage(err.message);
      });
    setInputText("");
  };

  return (
    <form className="chat-input-container">
      <input
        name="chatInput"
        className="chat-input-section"
        placeholder="Start typing your prompt here..."
        value={inputText}
        onChange={handleInput}
      />
      <button
        type="submit"
        disabled={inputText.trim() == ""}
        onClick={handleSubmit}
        className="chat-submit-button"
      >
        {chat ? <span>Send</span> : <img src="./send.png" alt="send icon" />}
      </button>
    </form>
  );
}

export default ChatInput;
