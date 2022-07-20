import React from "react";
import "./styles/buttonStyles.css";

const Button = ({onClick, type, ...props}) => {
    return(
        <button
        className={"button"+" "+props.class}
        type={type || "button"}
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