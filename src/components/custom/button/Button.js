import React from "react";
import "./button.css";
import PropTypes from "prop-types";

const Button = ({ onClick, type, disabled, ...props }) => {
  return (
    <button
      className={"button " + (props.className && props.className)}
      type={type || "button"}
      disabled={disabled}
      onClick={
        onClick
          ? (e) => {
              onClick();
              type !== "submit" && e.preventDefault();
            }
          : (e) => {
              type !== "submit" && e.preventDefault();
            }
      }
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  type: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
