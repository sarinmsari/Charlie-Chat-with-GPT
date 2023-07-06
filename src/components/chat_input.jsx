import React from "react";

let inputvlaue = "";
function ChatInput() {
  return (
    <div className="chat-input-container">
      <input
        name="chatInput"
        className="chat-input-section"
        placeholder="Start typing your prompt here..."
        value={inputvlaue}
      />
      <button type="submit" className="chat-submit-button" onSubmit={handleSubmit()}>
        Chat
      </button>
    </div>
  );
}

export default ChatInput;

const handleSubmit = () => {
  console.log(inputvlaue);
};
