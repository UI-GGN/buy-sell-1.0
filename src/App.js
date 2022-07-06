import React, { useState } from "react";
import './App.css';
import Modal from './components/Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <button className="btn nav-button login-btn" onClick={()=>{
          setModalOpen(true)
        }}>Login</button>
        <button className="btn nav-button register-btn" onClick={()=> {
          setModalOpen(true)
        } }>Register</button>
      </nav>
      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </>
  );
}

export default App;
