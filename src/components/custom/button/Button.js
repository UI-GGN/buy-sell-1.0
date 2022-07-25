import React from "react";
import "./buttonStyles.css";

const Button = ({onClick, type, disabled, ...props}) => {
    return(
        <button
        className={"button"+" "+(props.class && props.class)}
        type={type || "button"}
        disabled={disabled}
        onClick={ onClick ? (
            (e) => {
                onClick();
                //e.preventDefault();
                type !== "submit" && e.preventDefault();
            })
            :
            //(e) => {e.preventDefault()}
            (e) => {type !== "submit" && e.preventDefault()}
        }
        >
            {props.children}
        </button>
    )
}

export default Button;