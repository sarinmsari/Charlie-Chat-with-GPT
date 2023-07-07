import React, { useState } from "react";

function ChatInput({updateChatBox}) {
  const [inputText, setInputText] = useState("");
  const [responseText, setResponseText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = () => {
    console.log(inputText);
    localStorage.setItem("chat-query", inputText);
    //TODO: update response text
    localStorage.setItem("chat-query-response", "Charlie here..., under development :)");
    setInputText("");
    setResponseText("");
    updateChatBox();
  };

  return (
    <div className="chat-input-container">
      <input
        name="chatInput"
        className="chat-input-section"
        placeholder="Start typing your prompt here..."
        value={inputText}
        onChange={handleInput}
      />
      <div className="chat-submit-button">
        <img
          src="./send.png"
          alt="send icon"
          srcset=""
          onClick={handleSubmit}
        />
      </div>
    </div>
  );
}

export default ChatInput;
