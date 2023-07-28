import logo from './logo.svg';
import './App.css';
import Register from './components/Register';
import Login from './components/Login';
import { useState } from 'react';


function App() {

  const [showLogin, setShowLogin] = useState(false);


  const handlePopupLogin = () => {
    setShowLogin(true);
  }


  return (
    <div className="App">
      <header className="App-header">
        <a className="logo" href='/'>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className='text-decoration-none'>Register</h1>
        </a>
        <div className="user-list">
          <a href="/">Register and List Project
          </a>     
        </div>
        <div className="user-button">
          <button className='btn btn-danger'
            onClick={handlePopupLogin}
          >Login</button>
          <button className='btn btn-primary'
          >Register</button>
        </div>
      </header>
      <div className="container">
        <Register 

        />
      </div>
      {showLogin && (
        <div className='login-modal'>
          <div className="modal-login">
            <Login
              setShowLogin={setShowLogin}
            />
          </div>
        </div>
      )}
  </div>

  );
}

export default App;
