import React, { useState } from "react";
import './App.css';
import SignInPopup from './components/signInPopup';
import Modal from './components/Modal';

function App() {
  const [signInPopupOpen, setSignInPopupOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [login, setLogin] = useState(false);
  

  return (
    <>
      <nav className="nav">
        <button className="btn nav-button login-btn" onClick={()=>{
          setSignInPopupOpen(true)
          setLogin(true)
        }}>Login</button>
        <button className="btn nav-button register-btn" onClick={()=> {
          setSignInPopupOpen(true)
          setLogin(false)
        } }>Register</button>
      </nav>
      {signInPopupOpen && <SignInPopup setOpenSignInPopup={setSignInPopupOpen} setOpenModal={setModalOpen} login={login} />}
      {modalOpen && < Modal setOpenModal={setModalOpen} />}

    </>
  );
}

export default App;
