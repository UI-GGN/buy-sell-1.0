import React from "react";
import "./Modal.css";
import Login from "./login/Login";

function Modal({ setOpenModal }, {newUser}) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <Login/>
      </div>
    </div>
  );
}

export default Modal;