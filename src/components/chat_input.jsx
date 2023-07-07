import React, { useState } from "react";

function ChatInput({ setQuery, setResponse, setError }) {
  const [inputText, setInputText] = useState("");

  const handleInput = (e) => {
    setInputText(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setResponse("");
    setQuery(inputText);

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
        setResponse(data.message);
      })
      .catch((err) => {
        setError(err.message);
      });
    setInputText("");
  };

  return (
    <form className="chat-input-container">
      <input
        name="chatInput"
        className="chat-input-section"
        placeholder="Start typing your prompt here..."
        value={inputText.trim()}
        onChange={handleInput}
      />
      <button
        type="submit"
        disabled={inputText.trim() == ""}
        onClick={handleSubmit}
        className="chat-submit-button"
      >
        <img src="./send.png" alt="send icon" />
      </button>
    </form>
  );
}

export default ChatInput;
