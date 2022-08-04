import React from "react";
import "./button.css";

const Button = ({onClick, type, disabled, ...props}) => {
    return(
        <button
        className={"button "+(props.className && props.className)}
        type={type || "button"}
        disabled={disabled}
        onClick={ onClick ? (
            (e) => {
                onClick();
                type !== "submit" && e.preventDefault();
            })
            :
            (e) => {type !== "submit" && e.preventDefault()}
        }
        >
            {props.children}
        </button>
    )
}

export default Button;