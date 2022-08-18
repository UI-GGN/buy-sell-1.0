import React from "react"
import "./dropdown.css"

const Dropdown = (props) => {
    return (
        <div className="dropdown" style={props.style}>
            {props.children}
        </div>
    )
}

export default Dropdown
