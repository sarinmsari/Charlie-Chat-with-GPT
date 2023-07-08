import React from "react";

function NavBar({ chat }) {
  return (
    <div className="navbar-container">
      <img src="icon.png" alt="Charlie" className="navbar-icon" />
      {chat && <span>chat with gpt</span>}
    </div>
  );
}

export default NavBar;
