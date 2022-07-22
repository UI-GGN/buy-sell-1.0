import React from "react";
import { BrowserRouter } from "react-router-dom";
import './App.css';
import RootRouter from "./components/router/Router";


function App() {

  return(
        <BrowserRouter >
          <RootRouter/>
        </BrowserRouter>
  )
}

export default App;
