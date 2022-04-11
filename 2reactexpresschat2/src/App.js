import { useState } from 'react';
import './App.css';
import Login from './components/Login/Login.jsx';
import Menssage from './components/Menssage/Menssage';
import SendMessages from './components/SendMenssages/SendMenssages';
import Register from './components/Register/Register'
import Messages from './components/Menssage/Menssage';
function App() {
  
  const [ loggedIn, setloggedIn ] = useState(false);
  const [ datosPadre, setDatosPadre ] = useState("");


function loginHandler() {
  setloggedIn(true);
}

  return (
    <>
        <h1> Chat clase </h1>
        <Login/>
        <getLogin/>
        <Register parentSetter={setDatosPadre}/><br />
      <button onClick={loginHandler}>Register</button>
      {loggedIn && <Messages id={datosPadre.id} password={datosPadre.password} />}
      {loggedIn && <SendMessages id={datosPadre.id} password={datosPadre.password} />}
        
    </>
  );
}

export default App;
