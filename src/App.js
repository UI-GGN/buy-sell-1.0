import logo from './logo.svg';
import './App.css';

function openLogin(){

}

function openRegister(){

}

function App() {
  return (
    <nav className="nav">
      <button className="btn nav-button login-btn" onClick={openLogin}>Login</button>
      <button className="btn nav-button register-btn" onClick={openRegister}>Register</button>
    </nav>
  );
}

export default App;
