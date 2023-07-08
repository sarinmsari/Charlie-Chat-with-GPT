import React from "react";

function Content() {
  return (
    <div>
      <p>hi content-script</p>
    </div>
  );
}

render(<Content />, document.getElementById("content-target"));
