import React from "react";
import "./signInPopup.css";

function signInPopup({ setOpenSignInPopup, setOpenModal, login }) {
  return (
    <div className="Background">
      <div className="Container">
        <div className="CloseBtn">
          <button
            onClick={() => {
              setOpenSignInPopup(false);
            }}
          >
            X
          </button>
        </div>
        {login ? <p>Login As Buyer or seller?</p> : <p>Register As Buyer or seller?</p>}
        <p>
        <button className="Btn" style={{fontWeight:"bold", padding: "10px, 25px"}}
                    fullWidth
                    size="large"
                    variant="contained"
                    onClick={() => {
            setOpenModal(true);
            setOpenSignInPopup(false);
            
            }}>Buyer</button> 
            
        <button className="Btn" style={{fontWeight:"bold", padding: "10px, 25px"}}
                    fullWidth
                    size="large"
                    variant="contained" 
        onClick={() => {
            setOpenSignInPopup(false);
            setOpenModal(true);
            }}>Seller</button>
        </p>
        
      </div>
    </div>
  );
}

export default signInPopup;