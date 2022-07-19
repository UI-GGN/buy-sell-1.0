import React from "react";
import "./styles/buttonStyles.css";

const Button = ({click, type, ...props}) => {
    return(
        <button
        className={"button"+" "+props.class}
        type={type || "button"}
        onClick={ click ? (
            (e) => {
                click();
                e.preventDefault();
            })
            :
            (e) => {e.preventDefault()}
        }
        >
            {props.children}
        </button>
    )
}

export default Button;