import React from "react";
import "./dropdown.css"

const Dropdown = ({openDropdown, ...props}) => {

    return(
        <div 
        className="dropdown"
        style={props.style}
        >
            {props.children}
        </div>
    )
}

export default Dropdown;