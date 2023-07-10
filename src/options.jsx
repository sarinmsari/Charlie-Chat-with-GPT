import React from "react";
import ReactDOM from "react-dom/client";

function Options() {
    return ( <div className="options-container">
        <h3>Options Page</h3>
    </div> );
}

export default Options;

//render(<Options />, document.getElementById("options-target"));
ReactDOM.createRoot(document.getElementById("options-target")).render(<Options />);

