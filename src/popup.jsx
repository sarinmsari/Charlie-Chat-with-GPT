import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/tailwind.css";
import NavBar from "./components/navbar.jsx";
import ChatFeild from "./components/chat_feild.jsx";

function Popup() {
  return (
    <div className="popup-container">
      <NavBar />
      <ChatFeild />
    </div>
  );
}
export default Popup;

//render(<Popup />, document.getElementById("react-target"));
ReactDOM.createRoot(document.getElementById("react-target")).render(<Popup />);
