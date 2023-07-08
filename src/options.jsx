import React from "react";
import { render } from "react-dom";


function Options() {
    return ( <div className="options-container">
        <h3>Options Page</h3>
    </div> );
}

export default Options;

render(<Options />, document.getElementById("options-target"));
