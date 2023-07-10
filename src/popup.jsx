import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./assets/tailwind.css";
import NavBar from "./components/navbar.jsx";
import ChatFeild from "./components/chat_feild.jsx";
import { ChatContext } from "./context/chat_context.js";

function Popup() {
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
        chatQuery,
        setChatQuery,
        chatQueryResponse,
        setChatQueryResponse,
        errorMessage,
        setErrorMessage,
      }}
    >
      <div className="popup-container">
        <NavBar />
        <ChatFeild />
      </div>
    </ChatContext.Provider>
  );
}
export default Popup;

render(<Popup />, document.getElementById("react-target"));
