import React, { useState } from "react";

function ChatInput() {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = () => {
    console.log(inputText);
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
      {/* <IconButton className="chat-submit-button"></IconButton> */}
    </div>
  );
}

export default ChatInput;
