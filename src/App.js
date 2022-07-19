import React, { useState } from "react";
import './App.css';
import PromptDialog from "./components/dialog/PromptDialog";
import Header from "./components/header/Header";
import RootRouter from "./components/router/Router";


function App() {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const login = () => {
    setDialogOpen(true);
    setIsLogin(true);
  }

  const register = () => {
    setDialogOpen(true);
    setIsLogin(false);
  }

  return(
        <div>
          <Header isLoggedIn={false} login={login} register={register}/>
          <div className="container">
            <RootRouter/>
          </div>
          {dialogOpen && <PromptDialog isLogin={isLogin} setShowDialog={setDialogOpen}/>}
        </div>
  )
}

export default App;
